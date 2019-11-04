import React from 'react';
import ToDo from './ToDo'

function ToDoList({todos}){
    const mappedToDos = todos.map(todo => <ToDo {...todo} />)

    return(
        <div>
            {mappedToDos}
        </div>
    )
}

export default ToDoList
