import { createContext, useEffect, useState } from "react";

export const TodoDataContext = createContext();

const TodoProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    const storeTodos = localStorage.getItem("todos");
    if (storeTodos) {
      setTodoArr(JSON.parse(storeTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArr));
  }, [todoArr]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const newTodo = { id: Date.now(), todo: value.trim(), completed: false };
    setTodoArr((prev) => [...prev, newTodo]);
    setValue("");
  };

  const inputHandler = (e) => setValue(e.target.value);

  const deleteHandler = (id) =>
    setTodoArr((prev) => prev.filter((item) => item.id !== id));

  const checkedHandle = (id, checked) =>
    setTodoArr((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: checked } : item))
    );

  return (
    <TodoDataContext.Provider
      value={{ submitHandler, inputHandler, deleteHandler, checkedHandle, value, setValue, todoArr, setTodoArr }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};

export default TodoProvider;
