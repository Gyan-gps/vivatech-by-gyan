import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_TODO, EDIT_TODO } from "../redux/action";
import "../styles/form.css";
import ExportExcelFile from "./ExportExcelFile";

const Form = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    list: "",
  });
  const selectedTodo = useSelector((state) => state.todo);
  console.log(selectedTodo);
  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    // if(name==="list"&&value=="")
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  useEffect(() => {
    selectedTodo && setTodo(selectedTodo);
  }, [selectedTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(todo);
    if (selectedTodo) {
      dispatch({
        type: EDIT_TODO,
        payload: todo,
      });
    } else {
      dispatch({
        type: CREATE_TODO,
        payload: todo,
      });
    }
    setTodo({
      title: "",
      description: "",
      list: "",
    });
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Text"
          name="description"
          value={todo.description}
          onChange={handleChange}
        />
        <select name="list" value={todo.list} onChange={handleChange}>
          <option value="">Select List</option>
          {[1, 2, 3, 4, 5, 6, 7].map((e) => {
            return (
              <option key={e} value={e}>
                List {e}
              </option>
            );
          })}
        </select>
        <button className="submit" type="submit">
          {selectedTodo ? "Save" : "Create Todo"}
        </button>
      </form>
      <div className="excel">
        <ExportExcelFile />
      </div>
    </div>
  );
};

export default Form;
