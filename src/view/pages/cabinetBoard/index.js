import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getDocs, db, collection, updateDoc, doc } from '../../../services/firebase/firebase'
import { taskStatusModel } from "./constants";
import LoadingWrapper from "../../components/shared/LoadingWrapper";
import { Typography} from 'antd';

import './index.css';
const { Title } = Typography

const CabinetBoard = () => {
const [columns, setColumns ] = useState(taskStatusModel);
const [loading, setLoading] = useState(false);

const hadleGetIssues = async() => {

  const updatedTaskStatusModel = taskStatusModel();
  const queryData = await getDocs(collection(db, 'issue'));
   queryData.docs.map((doc) => {
    const data = doc.data();
    const {status} = data;
    if(updatedTaskStatusModel[status]){
      updatedTaskStatusModel[status].items.push(data); 
    }     
  })
  setLoading(false)
  setColumns({...updatedTaskStatusModel});
}
useEffect(() => {
hadleGetIssues();
}, [])
console.log(columns)
const handleChangeTaskStatus = async result => {
setLoading(true);
const { destination: { droppableId, index }, draggableId } = result;
const docRef = doc(db, "issue", draggableId);
await updateDoc(docRef, {
  status: droppableId,
})
hadleGetIssues();
}
return (
    <div className="drag_context_cantainer">
      <LoadingWrapper loading={loading}>
       <DragDropContext onDragEnd={handleChangeTaskStatus}>
          {
            Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div key={columnId} className="column_container">
                    <div className="column_header">
                      <Title level={5} type="secondary">
                        {column.name}
                        {" "}
                        {column.items.length}
                        </Title>
                    </div>
                    
                    <div>
                       <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                           return(
                            <div 
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                              style={{
                                padding: 6,
                                minHeight: 600,
                                backgroundColor: snapshot.isDraggingOver ? "lightblue" : "#f4f5f7",
                              }}>
                            {
                                column.items.map((item, index) => {
                                    return (
                                        <Draggable draggableId={item.key} index={index} key={item.key}>
                                           {(provided, snapshot) => {
                                            return (
                                             <div
                                             className="issue_card_container"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                 style={{
                                                    backgroundColor: snapshot.isDragging ? "#ebecf0" : "#fff",
                                                    ...provided.draggableProps.style
                                                }}>
                                                {item.shortSummary}
                                            </div>
                                              )
                                            }
                                        }
                                        </Draggable>
                                    )
                                })
                            }
                            </div>
                           )
                          }}
                       </Droppable>
                    </div>
                  </div>
                )
            })
          }
       </DragDropContext>
       </LoadingWrapper>
    </div>
)
}
export default CabinetBoard;