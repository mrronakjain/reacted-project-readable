export const ON_GET_CATEGORY = "ON_GET_CATEGORY";
export const ON_GET_POSTS = "ON_GET_POSTS";
export const ON_GET_COMMENTS = "ON_GET_COMMENTS";

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
