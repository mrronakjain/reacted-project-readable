export const ON_GET_CATEGORY = "ON_GET_CATEGORY";
export const ON_GET_POSTS = "ON_GET_POSTS";
export const ON_GET_COMMENTS = "ON_GET_COMMENTS";
export const SORT_BY_UP_VOTE_POSTS = "SORT_BY_UP_VOTE_POSTS";
export const SORT_BY_DOWN_VOTE_POSTS = "SORT_BY_DOWN_VOTE_POSTS";
export const SORT_BY_ASC_TIME_POSTS = "SORT_BY_ASC_TIME_POSTS";
export const SORT_BY_DESC_TIME_POSTS = "SORT_BY_DESC_TIME";

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
