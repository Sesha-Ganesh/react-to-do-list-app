import React from 'react';

function TodoItem(props) {
     let styleValue = props.isComplete
          ? { decoration: 'line-through', backgroundColor: 'green' }
          : { docoration: 'none', backgroundColor: '' };
     return (
          <div className='todoItem'>
               <input
                    className='todo-checkbox'
                    type='checkbox'
                    checked={props.isComplete}
                    onChange={() => props.handleCheckbox(props.index)}
               />
               <div
                    className='todo-text'
                    style={{
                         textDecoration: styleValue.decoration,
                         backgroundColor: styleValue.backgroundColor,
                    }}>
                    {props.text}
               </div>
               <a
                    className='close-icon'
                    onClick={() => {
                         props.handleDelete(props.index);
                    }}>
                    X
               </a>
          </div>
     );
}

export default TodoItem;
