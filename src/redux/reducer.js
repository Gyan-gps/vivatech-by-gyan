import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS,
  SELECTED_TODO,
  UPDATE_TODO_LIST,
} from "./action";

const initial = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  todo: null,
};
function store(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const reducer = (state = initial, action) => {
  console.log(action);
  let todos;
  switch (action.type) {
    case GET_TODOS:
      return state;
    case CREATE_TODO:
      todos = [{ ...action.payload, createdAt: Date.now() }, ...state.todos];
      store(todos);
      return {
        ...state,
        todos,
      };
    case UPDATE_TODO_LIST:
      todos = state.todos.map((prev) =>
        prev.createdAt === action.payload.data.createdAt
          ? { ...prev, [action.payload.name]: action.payload.value }
          : prev
      );
      store(todos);
      return {
        ...state,
        todos,
      };
    case EDIT_TODO:
      todos = state.todos.map((prev) =>
        prev.createdAt === action.payload.createdAt ? action.payload : prev
      );
      store(todos);
      return {
        ...state,
        todos,
        todo: null,
      };
    case DELETE_TODO:
      todos = state.todos.filter((prev) => prev.createdAt !== action.payload);
      store(todos);
      return {
        ...state,
        todos,
      };
    case SELECTED_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
