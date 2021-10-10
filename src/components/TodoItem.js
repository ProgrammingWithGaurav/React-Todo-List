import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div>
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                <hr />
            </div>
        </div>
    )
}
