import React from 'react';
import './ToDoList.css';
import TodoItem from './ToDoItem';
class ToDoList extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               inputText: '',
               todos: [],
          };

          this.handleChange = (e) => {
               this.setState({ inputText: e.target.value });
          };
          this.addToDo = (e) => {
               e.preventDefault();
               const newTodo = {
                    index: this.state.todos.length,
                    text: this.state.inputText,
                    isComplete: false,
               };
               this.setState({ todos: [...this.state.todos, newTodo] });
               this.handleCheckbox = this.handleCheckbox.bind(this);
               this.handleDelete = this.handleDelete.bind(this);
          };
     }

     handleCheckbox(checkedIndex) {
          const temp = this.state.todos.map((todo, index) => {
               if (checkedIndex === index) {
                    return { ...todo, isComplete: !todo.isComplete };
               }
               return todo;
          });
          this.setState({ todos: temp });
     }

     handleDelete(deletedIndex) {
          const deletedArray = this.state.todos.filter((e, i) => i != deletedIndex);
          this.setState({ todos: deletedArray });
     }

     renderTodoItem() {
          return this.state.todos.map((todo, i) => (
               <TodoItem
                    key={i}
                    index={i}
                    text={todo.text}
                    isComplete={todo.isComplete}
                    handleCheckbox={this.handleCheckbox}
                    handleDelete={this.handleDelete}
               />
          ));
     }

     render() {
          const { inputText } = this.state;
          return (
               <div>
                    <div id='todo-title'>To-Do List App</div>
                    <div id='to-do-app'>
                         <input
                              id='input-text-field'
                              type='text'
                              onChange={this.handleChange}
                              value={inputText}
                         />
                         <button onClick={this.addToDo}>Add</button>
                         <div>{this.renderTodoItem()}</div>
                    </div>
               </div>
          );
     }
}

export default ToDoList;
