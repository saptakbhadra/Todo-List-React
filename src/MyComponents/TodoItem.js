import React from 'react';

export const TodoItem = ({ props, onDelete }) => {
  return (
    <>
    <div>
      <ul>
        <li>
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
          <button className="btn btn-sm btn-danger mb-3" onClick={() => { onDelete(props) }}>Delete</button>
        </li>
      </ul>
    </div>
    </>
  )
}

export default TodoItem;