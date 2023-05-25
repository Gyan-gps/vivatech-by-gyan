import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import "../styles/todo.css";
const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todosContainer">
      <div className="cardContainer">
        {todos.map((data) => {
          return <TodoCard data={data} key={data.createdAt} />;
        })}
      </div>
    </div>
  );
};

export default Todos;
