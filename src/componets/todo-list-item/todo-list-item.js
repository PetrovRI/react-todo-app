import React from 'react';
import './todo-list-item.scss'



const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important}) => {

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }
    
        return (
            <div className="item-container">
                <span 
                    className={classNames}
                    onClick={onToggleDone}>{label}
                </span>
                
                <div>
                <button type="button" 
                    className="btn btn--important"
                    onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn btn--trash"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem ;
