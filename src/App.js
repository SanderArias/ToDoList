import './App.css';
import TodoList from './Components/TodoList';
function App() {
  const todo = {
    header: 'Example',
    isCompleted: false,
  }
  return (
    <div className="App">
      <center>
      <h1>ToDoList</h1>
      </center>
      <br/>
      <TodoList />
    </div>
  );
}

export default App;
