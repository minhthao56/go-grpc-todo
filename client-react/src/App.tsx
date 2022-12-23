import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./services/todo";

function App() {
  async function fetchData() {
    const resp = await addTodo();
    console.log({ resp });
    console.log({ description: resp.getContent() });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={fetchData}>Add</button>
      </header>
    </div>
  );
}

export default App;
