import { useContext } from "react";
import { TodoDataContext } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoArr } = useContext(TodoDataContext);

  if (todoArr.length === 0) {
    return (
      <div style={{textAlign:'center', padding:'30px 0', color:'rgba(255,255,255,0.2)', fontSize:'13px'}}>
        No tasks yet — add one above!
      </div>
    );
  }

  return (
    <ul style={{padding:0, margin:0, maxHeight:'280px', overflowY:'auto'}}>
      {todoArr.filter(item => item && item.id).map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
