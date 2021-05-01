import React, { useState,useEffect } from 'react';

export const AddTodo = (props) => {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");


  const submit = (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or description cannot be blank")
    }
    else{
    props.addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
  }

  return (
    <>
    <div className="container">
      <h3 className="text-center">
        Add Task
      </h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label for="task">Task:</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="Type here" id="task" />
        </div>
        <div className="form-group">
          <label for="text">Task Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" placeholder="Type here" id="task-description" />
        </div>
        <button type="submit" className="btn btn-success">Add</button>
      </form>
    </div>
    </>
  )
}