import * as API from "../utils/api";

import { onGetCategories, onGetPosts, onGetComments } from "../actions";

export const getCategories = () => dispatch =>
  API.getAllCategories().then(categories =>
    dispatch(onGetCategories(categories))
  );

export const getPostsAndComments = () => dispatch => dispatch(getPosts());

export const getPosts = () => dispatch =>
  API.getAllPosts().then(posts => {
    Promise.all([dispatch(onGetPosts(posts)), dispatch(getAllComments(posts))]);
  });

export const getAllComments = posts => dispatch =>
  posts.map(post =>
    API.getAllComments(post.id).then(comments =>
      dispatch(onGetComments(comments))
    )
  );

export const getComments = id => dispatch =>
  API.getAllComments(id).then(comments => dispatch(onGetComments(comments)));
