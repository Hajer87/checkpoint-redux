import "bootstrap/dist/css/bootstrap.min.css";
import TasksList from "./TasksList";
import Add from './Add';

import "../styles/App.css";

function App() {
  
return(
      <div className='App'>
        <h1> ToDo APP</h1>
       <Add/>
        <TasksList/>
      </div>
   
  );
}

export default App;
