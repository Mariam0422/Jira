import { useEffect, useContext, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { db, updateDoc, doc } from "../../../services/firebase/firebase";
import { Typography, Flex } from "antd";
import EditIssueModal from "../../components/shared/EditIssueModal";
import { ISSUE_OPTION, issueTypes, PRIORITY_OPTION } from "../../../core/constant/issue";
import "./index.css";
import { AuthContext } from "../../../context/AuthContext";
const { Title, Text } = Typography;

const CabinetBoard = () => {
  const { columns, handleGetIssues, setColumns, issueLoading } = useContext(AuthContext);
  const [ selectedIssueData, setSelectedIssueData ] = useState(null);

  useEffect(() => {
    handleGetIssues();
  }, []);
  const handleDragEnd = (result) => {

    const { destination, source } = result;
    const sourceColumn = columns[source.droppableId];
    const destColumns = columns[destination.droppableId];

    const sourceItem = [...sourceColumn.items];
    const destItems = [...destColumns.items];

    const [removed] = sourceItem.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    if (source.droppableId !== destination.droppableId) {
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItem,
        },
        [destination.droppableId]: {
          ...destColumns,
          items: destItems,
        },
      });
    } else {
      const sourseColumn = columns[source.droppableId];
      const sourceColumnItems = sourseColumn.items;
      const [removed] = sourceColumnItems.splice(source.index, 1);
      sourceColumnItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceColumnItems,
        },
      });
    }
  };
  const handleChangeTaskStatus = async (result) => {
    if (result.destination) {
      try {
        handleDragEnd(result);
        const {
          destination: { droppableId, index },
          draggableId,
        } = result;
        const docRef = doc(db, "issue", draggableId);
        await updateDoc(docRef, {
          status: droppableId,
          index,
        });
      } catch {
        console.log("error");
      }
    }
  };
 
  return (
    <div className="drag_context_cantainer">
      <DragDropContext onDragEnd={handleChangeTaskStatus}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div key={columnId} className="column_container">
              <div className="column_header">
                <Title level={5} type="secondary">
                  {column.name} {column.items.length}
                </Title>
              </div>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="droppable_container"
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? "lightblue"
                            : "#f4f5f7",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              draggableId={item.key}
                              index={index}
                              key={item.key}                           
                            >
                              {(provided, snapshot) => {                                
                                return (
                                  <div
                                    onClick = {() => setSelectedIssueData(item)}
                                    className="issue_card_container"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      backgroundColor: snapshot.isDragging
                                        ? "#ebecf0"
                                        : "#fff",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Text>
                                    {item.shortSummary}
                                    </Text>
                                   
                                    <Flex justify="space-between">
                                      <div>
                                       {ISSUE_OPTION[item.issueType].icon}
                                       {PRIORITY_OPTION[item.priority].icon}
                                      </div>
                                      <div>

                                      </div>
                                    </Flex>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
      {
        Boolean(selectedIssueData) && (
      <EditIssueModal 
      issueData={selectedIssueData}
      visible={Boolean(selectedIssueData)}
      onClose={() => setSelectedIssueData(null)}
      />
        )
      }
      
    </div>
  );
};
export default CabinetBoard;
