import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO, SELECTED_TODO, UPDATE_TODO_LIST } from "../redux/action";
import "../styles/todo.css";

const TodoCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: UPDATE_TODO_LIST,
      payload: {
        data,
        name,
        value,
      },
    });
  };
  return (
    <div className="card">
      <div className="top">
        <div className="title">
          <b>Title:</b> {data.title}
        </div>
        <div className="description">
          <b>Description:</b> {data.description}
        </div>
        <select
          className="list"
          name="list"
          value={data.list}
          onChange={handleChange}
        >
          <option value="">Select List</option>
          {[1, 2, 3, 4, 5, 6, 7].map((e) => {
            return (
              <option key={e} value={e}>
                List {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="action">
        <button
          className="update"
          onClick={() => {
            dispatch({
              type: SELECTED_TODO,
              payload: data,
            });
          }}
        >
          Update
        </button>
        <button
          className="delete"
          onClick={() => {
            dispatch({
              type: DELETE_TODO,
              payload: data.createdAt,
            });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
