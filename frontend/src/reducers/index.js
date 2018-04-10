import { snackbarReducer } from "react-redux-snackbar";
import { combineReducers } from "redux";
import comment from "./comments";
import category from "./categories";
import post from "./posts";

export default combineReducers({
  category,
  post,
  comment,
  snackbar: snackbarReducer
});
