import React from 'react';
import External from './external';
import ToDoList from './ToDo/ToDoList';

const App = () => {
     return (
          <>
               <ToDoList />
               <div id='todo-footer'>developed by Sesha Ganesh</div>
          </>
     );
};
export default App;
