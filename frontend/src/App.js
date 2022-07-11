import TasksComponent from "./components/TasksComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="placeholder"></div>
      <div className="component_list">
        <TasksComponent />
      </div>
      <div className="placeholder"></div>
    </div>
  );
}

export default App;
