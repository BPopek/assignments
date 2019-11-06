import React from 'react';
import ToDo from './ToDo'

function ToDoList({todos, handleDelete, handleSave}){
    const mappedToDos = todos.map(todo => (
                <ToDo 
                    key={todo._id}
                    {...todo} 
                    handleDelete={handleDelete}
                    handleSave={handleSave}
                    />
                )
            )
        const style = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: "5px",
            marginTop: "20px"        
        }

    return(
        <div style={style}>
            {mappedToDos}
        </div>
    )
}

export default ToDoList
