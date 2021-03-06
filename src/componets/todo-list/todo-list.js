import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.scss';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item;

        return(
            <li key={id} className="todo-item">
                <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                />
            </li>  
        )
    })

    return(
     <ul className="todo-list">
        {elements}
     </ul>
    );
 }

 export default TodoList;