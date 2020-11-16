
import './App.css';
import Task from './component/Task'
import TodoList from './component/TodoList'
import {Provider} from './context'


function App() {
  return (
    <Provider>
    <div className="app-container">
      <TodoList/>
     <Task/>
    </div>
    </Provider>
  );
}

export default App;
