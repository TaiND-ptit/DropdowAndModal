import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItem = [
  {id: "1", content: 'item-1'},
  {id: "2", content: 'item-2'},
  {id: "3", content: 'item-3'},
  {id: "4", content: 'item-4'},
  {id: "5", content: 'item-5'},
  {id: "6", content: 'item-6'},
];

const reorder = (list, old_index, new_index) => {
  const result = Array.from(list);
  const [removed] = result.splice(old_index, 1);
  result.splice(new_index, 0, removed);

  return result;
};
function DropDown() {

  const [items, setItems] = useState(getItem);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 7 * 2,
    margin: `0 0 7px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 7,
    width: 500
  });
  
  const onDragEnd = (result) =>{
    if (!result.destination) {
      return;
    }
    const index = result.source.index;
    const newIndex = result.destination.index;
    const newArray = reorder(items, index, newIndex);
    setItems(newArray);
  }
  
  return (
  <div  style={{
       display: 'flex',
       width: '100%',
       height: '100vh',
       justifyContent: 'center',
       alignItems: 'center',
  }}>

    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >                 
                        {item.content}
                   
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DropDown