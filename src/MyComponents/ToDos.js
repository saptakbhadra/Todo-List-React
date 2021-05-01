import React from 'react';
import TodoItem from './TodoItem.js';

export const ToDos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <>
  <div className="container" style={myStyle}>
    <h3 className="text-center my-4">Todos List</h3>
    {props.todos.length===0 ? "No todos to display" :
    
    props.todos.map((todo_item)=>{
          return <TodoItem props={todo_item} key={props.sno} onDelete={props.onDelete}/>
    })
    }
  </div>
  </>
  )
}

export default ToDos;
