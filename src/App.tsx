import "./App.css";
import { TodoContextProvider } from "./Store/Todo-Context";

import Todos from "./Components/Todos";
import NewTodo from "./Components/NewTodo";



function App() {
  return (
    <TodoContextProvider>
      <NewTodo  />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
