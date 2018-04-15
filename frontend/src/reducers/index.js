import { snackbarReducer } from "react-redux-snackbar";
import { combineReducers } from "redux";

import { EDIT_BODY_POST, EDIT_TITLE_POST } from "../actions";

import comment from "./comments";
import category from "./categories";
import post from "./posts";
function editTitlePost(state = {}, action) {
  const { title } = action;

  switch (action.type) {
    case EDIT_TITLE_POST:
      return {
        ...state,
        title
      };
    default:
      return state;
  }
}

function editBodyPost(state = {}, action) {
  const { body } = action;

  switch (action.type) {
    case EDIT_BODY_POST:
      return {
        ...state,
        body
      };
    default:
      return state;
  }
}
export default combineReducers({
  category,
  post,
  comment,
  editBodyPost,
  editTitlePost,
  snackbar: snackbarReducer
});
