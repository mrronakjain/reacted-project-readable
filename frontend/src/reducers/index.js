import { snackbarReducer } from "react-redux-snackbar";
import { combineReducers } from "redux";
import category from "./categories";

export default combineReducers({
  category,
  snackbar: snackbarReducer
});
