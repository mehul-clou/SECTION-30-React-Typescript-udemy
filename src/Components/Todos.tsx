import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoContext } from "../Store/Todo-Context";

const Todos:React.FC = () => {
  const contextValue = useContext(TodoContext)
  
  return (
    <ul>
      {contextValue.items.map((item) => (
        <TodoItems key={item.id} text={item.text} handleDelete={contextValue.handleDeleteTodo.bind(null,item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
