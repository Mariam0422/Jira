import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { taskStatus } from "../../../core/constant/issue";
import './index.css';
const tasks = [
    {}
]
const taskStatusModel = {
   [taskStatus.TODO]: {
    name: taskStatus.TODO, 
    items: [{
        id: "1",
        title: "Create Button"
    }],
   },
   [taskStatus.IN_PROGRESS] : {
    name: taskStatus.IN_PROGRESS,
    items: [],
   },
   [taskStatus.TAST] : {
    name: taskStatus.TEST,
    items: [],
   },
   [taskStatus.DONE] : {
    name: taskStatus.DONE,
    items: [],
   }
};
const CabinetBoard = () => {
const [columns, setColumns ] = useState(taskStatusModel);

return (
    <div className="drag_context_cantainer">
       <DragDropContext onDragEnd={() => {}}>
          {
            Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div key={columnId} className="column_container">
                    <h2>{column.name}</h2>
                    
                    <div>
                       <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                           return(
                            <div 
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                              style={{
                                width: 300,
                                padding: 6,
                                minHeight: 600,
                                backgroundColor: snapshot.isDraggingOver ? "lightblue" : "#f4f5f7",
                              }}>
                            {
                                column.items.map((item, index) => {
                                    return (
                                        <Draggable draggableId={item.id} index={index} key={item.id}>
                                            {(provided, snapshot) => {
                                              return (
                                                <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                 style={{
                                                    userSelect: "none",
                                                    padding: 18,
                                                    minHeight: 50,
                                                    color: "white",
                                                    backgroundColor: snapshot.isDragging ? "grey" : "blue",
                                                }}>
                                                {item.title}
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
    </div>
)
}
export default CabinetBoard;