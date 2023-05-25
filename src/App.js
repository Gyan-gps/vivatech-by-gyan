import { useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
function App() {
  const todos = useSelector((state) => state);
  console.log(todos);
  return (
    <div className="App">
      <Form />
      <Todos />
    </div>
  );
}

export default App;
