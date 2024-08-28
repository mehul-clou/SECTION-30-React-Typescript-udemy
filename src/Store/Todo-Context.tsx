import React, { useState } from "react";
import Todo from "../models/todo";

interface todocontextProps {
  items: Todo[];
  onAddTodo: (text: string) => void;
  handleDeleteTodo: (id: string) => void;
}

type Props = { children: React.ReactNode };

export const TodoContext = React.createContext<todocontextProps>({
  items: [],
  onAddTodo: (text: string) => {},
  handleDeleteTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[] >([]);

  function handleTodo(todoText: string) {
    setTodos((prevValue) => {
      return [...prevValue, new Todo(todoText)];
    });
  }

  function onRemoveTodo(todoId: string) {
    setTodos((prevValue) => prevValue.filter((todo) => todo.id !== todoId));
  }

  const ctxValue: todocontextProps = {
    items: todos,
    onAddTodo: handleTodo,
    handleDeleteTodo: onRemoveTodo,
  };
  return (
    <TodoContext.Provider value={ctxValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
