import { snackbarReducer } from "react-redux-snackbar";
import { combineReducers } from "redux";

import {
  EDIT_BODY_POST,
  EDIT_TITLE_POST,
  EDIT_BODY_COMMENT,
  ON_GET_COMMENT
} from "../actions";

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
function editBodyComment(state = {}, action) {
  const { body } = action;

  switch (action.type) {
    case EDIT_BODY_COMMENT:
      return {
        ...state,
        body
      };
    default:
      return state;
  }
}

function onGetComment(state = {}, action) {
  const { body, comment } = action;

  switch (action.type) {
    case ON_GET_COMMENT:
      return {
        ...state,
        ...comment
      };
    case EDIT_BODY_COMMENT:
      return {
        ...state,
        body: body
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
  editBodyComment,
  onGetComment,
  snackbar: snackbarReducer
});
