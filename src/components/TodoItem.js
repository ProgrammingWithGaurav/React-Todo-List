import React from 'react'

export const TodoItem = ({ todo }) => {
    return (
        <div>
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-danger">Delete</button>

            </div>
        </div>
    )
}
