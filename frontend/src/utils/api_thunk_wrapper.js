import * as API from "../utils/api";

import {
  onGetCategories,
  onGetPosts,
  onGetComments,
  upVotePost,
  downVotePost,
  deletePost,
  addComment,
  upVoteComment,
  downVoteComment,
  deleteComment,
  onGetComment
} from "../actions";

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

export const addPost = post => dispatch => API.createPost(post);

export const onUpVotePost = id => dispatch =>
  API.upVotePost(id).then(() => dispatch(upVotePost({ id })));

export const onDownVotePost = id => dispatch =>
  API.downVotePost(id).then(() => dispatch(downVotePost({ id })));

export const onDeletePost = id => dispatch =>
  API.deletePost(id).then(() => dispatch(deletePost({ id })));

export const editPost = (id, post) => dispatch => API.editPost(id, post);

export const onAddComment = comment => dispatch =>
  API.createComment(comment).then(() => dispatch(addComment(comment)));

export const onDeleteComment = (id, parentId) => dispatch =>
  API.deleteComment(id).then(() => dispatch(deleteComment({ id, parentId })));

export const onUpVoteComment = (id, parentId) => dispatch =>
  API.upVoteComment(id).then(() => dispatch(upVoteComment({ id, parentId })));

export const onDownVoteComment = (id, parentId) => dispatch =>
  API.downVoteComment(id).then(() =>
    dispatch(downVoteComment({ id, parentId }))
  );

export const onGetSingleComment = id => dispatch =>
  API.getSingleComment(id).then(comment => dispatch(onGetComment(comment)));

export const editComment = (id, comment) => dispatch =>
  API.editComment(id, comment);
