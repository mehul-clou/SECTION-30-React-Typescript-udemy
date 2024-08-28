const TodoItems: React.FC<{ text: string, handleDelete:()=>void}> = (props) => {


  return <li onClick={props.handleDelete}>{props.text}</li>;
};

export default TodoItems;
