export const ON_GET_CATEGORY = "ON_GET_CATEGORY";
export const ON_GET_POSTS = "ON_GET_POSTS";
export const ON_GET_COMMENTS = "ON_GET_COMMENTS";
export const SORT_BY_UP_VOTE_POSTS = "SORT_BY_UP_VOTE_POSTS";
export const SORT_BY_DOWN_VOTE_POSTS = "SORT_BY_DOWN_VOTE_POSTS";
export const SORT_BY_ASC_TIME_POSTS = "SORT_BY_ASC_TIME_POSTS";
export const SORT_BY_DESC_TIME_POSTS = "SORT_BY_DESC_TIME";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const UP_VOTE_POST = "UP_VOTE_POST";
export const DOWN_VOTE_POST = "DOWN_VOTE_POST";
export const EDIT_BODY_POST = "EDIT_BODY_POST";
export const EDIT_TITLE_POST = "EDIT_TITLE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMMENT";
export const DELETE_COMMENT = "DELETE_COMMMENT";
export const UP_VOTE_COMMENT = "UP_VOTE_COMMENT";
export const DOWN_VOTE_COMMENT = "DOWN_VOTE_COMMENT";
export const SORT_BY_UP_VOTE_COMMENTS = "SORT_BY_UP_VOTE_COMMENTS";
export const SORT_BY_DOWN_VOTE_COMMENTS = "SORT_BY_DOWN_VOTE_COMMENTS";
export const SORT_BY_ASC_TIME_COMMENTS = "SORT_BY_ASC_TIME_COMMENTS";
export const SORT_BY_DESC_TIME_COMMENTS = "SORT_BY_DESC_TIME_COMMENTS";
export const EDIT_BODY_COMMENT = "EDIT_BODY_COMMENT";
export const ON_GET_COMMENT = "ON_GET_COMMENT";

export function onGetCategories(categories) {
  return {
    type: ON_GET_CATEGORY,
    categories
  };
}

export function onGetPosts(posts) {
  return {
    type: ON_GET_POSTS,
    posts
  };
}

export function onGetComments(comments) {
  return {
    type: ON_GET_COMMENTS,
    comments
  };
}

export function sortByUpVotePosts(posts) {
  return {
    type: SORT_BY_UP_VOTE_POSTS,
    posts
  };
}

export function sortByDownVotePosts(posts) {
  return {
    type: SORT_BY_DOWN_VOTE_POSTS,
    posts
  };
}

export function sortByAscTimePosts(posts) {
  return {
    type: SORT_BY_ASC_TIME_POSTS,
    posts
  };
}

export function sortByDescTimePosts(posts) {
  return {
    type: SORT_BY_DESC_TIME_POSTS,
    posts
  };
}

export function addPost({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted
}) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  };
}

export function editPost({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted
}) {
  return {
    type: EDIT_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  };
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id
  };
}

export function upVotePost({ id }) {
  return {
    type: UP_VOTE_POST,
    id
  };
}

export function downVotePost({ id }) {
  return {
    type: DOWN_VOTE_POST,
    id
  };
}

export function editBodyPost({ body }) {
  return {
    type: EDIT_BODY_POST,
    body
  };
}

export function editTitlePost({ title }) {
  return {
    type: EDIT_TITLE_POST,
    title
  };
}

export function addComment({
  id,
  parentId,
  timestamp,
  body,
  author,
  voteScore,
  deleted,
  parentDeleted
}) {
  return {
    type: ADD_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  };
}

export function upVoteComment({ id, parentId }) {
  return {
    type: UP_VOTE_COMMENT,
    id,
    parentId
  };
}

export function downVoteComment({ id, parentId }) {
  return {
    type: DOWN_VOTE_COMMENT,
    id,
    parentId
  };
}

export function editComment({
  id,
  parentId,
  timestamp,
  body,
  author,
  voteScore,
  deleted,
  parentDeleted
}) {
  return {
    type: EDIT_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  };
}

export function sortByUpVoteComments({ parentId }) {
  return {
    type: SORT_BY_UP_VOTE_COMMENTS,
    parentId
  };
}

export function sortByDownVoteComments({ parentId }) {
  return {
    type: SORT_BY_DOWN_VOTE_COMMENTS,
    parentId
  };
}

export function sortByAscTimeComments({ parentId }) {
  return {
    type: SORT_BY_ASC_TIME_COMMENTS,
    parentId
  };
}

export function sortByDescTimeComments({ parentId }) {
  return {
    type: SORT_BY_DESC_TIME_COMMENTS,
    parentId
  };
}

export function deleteComment({ id, parentId }) {
  return {
    type: DELETE_COMMENT,
    id,
    parentId
  };
}

export function editBodyComment({ body }) {
  return {
    type: EDIT_BODY_COMMENT,
    body
  };
}

export function onGetComment(comment) {
  return {
    type: ON_GET_COMMENT,
    comment
  };
}
