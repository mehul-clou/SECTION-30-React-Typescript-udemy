import { FormEvent, useContext } from "react";
import { useRef } from "react";
import { TodoContext } from "../Store/Todo-Context";

const NewTodo = () => {
  const contextValue = useContext(TodoContext)

  const todoInputTextRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = todoInputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    contextValue.onAddTodo(enteredText)
    
     
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">TodoText</label>
      <input type="text" id="todo" ref={todoInputTextRef} />
      <button type="submit">Add Todos</button>
    </form>
  );
};
export default NewTodo;
