import React from 'react';
import ToDoListItem from '../todo-list-item/ToDoListItem'
import '../../styles/todo-list.css'

const ToDoList = ({todos, onDeleted}) => {
 
    return (
        <ul className='list-group todo-list'>
        { todos.map( toDoItem => {
            const {id, ...itemProps} = toDoItem;
            return (
            <li key={toDoItem.id} className='list-group-item'>
                <ToDoListItem 
                // label={toDoItem.label}
                // important={toDoItem.important} 
                {...itemProps}
                onDeleted={() => onDeleted(toDoItem.id)}
                />
            </li>
            )})
        }
        </ul>
    );
};

export default ToDoList;