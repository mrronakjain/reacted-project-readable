import {
  ON_GET_POSTS,
  SORT_BY_UP_VOTE_POSTS,
  SORT_BY_DOWN_VOTE_POSTS,
  SORT_BY_ASC_TIME_POSTS,
  SORT_BY_DESC_TIME_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST
} from "../actions";

import sortBy from "sort-by";

/**
 * Post
 * id			String	Unique identifier
 * timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
 * title		String	Post title
 * body			String	Post body
 * author		String	Post author
 * category		String	Should be one of the categories provided by the server
 * voteScore	Integer	Net votes the post has received (default: 1)
 * deleted		Boolean	Flag if post has been 'deleted' (inaccessible by the front end), (default: false)
 */

function post(state = [], action) {
  const {
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
    posts
  } = action;

  switch (action.type) {
    case ON_GET_POSTS:
      let result = posts.reduce((obj, item) => {
        obj.push(item);
        return obj;
      }, []);
      return state.concat(result);
    case SORT_BY_UP_VOTE_POSTS:
      return [...state.sort(sortBy("voteScore"))];
    case SORT_BY_DOWN_VOTE_POSTS:
      return [...state.sort(sortBy("-voteScore"))];
    case SORT_BY_ASC_TIME_POSTS:
      return [...state.sort(sortBy("timestamp"))];
    case SORT_BY_DESC_TIME_POSTS:
      return [...state.sort(sortBy("-timestamp"))];
    case ADD_POST:
      return state.concat([
        {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore,
          deleted
        }
      ]);
    case EDIT_POST:
      return state.filter(post => post.id !== id).concat([
        {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore,
          deleted
        }
      ]);
    case DELETE_POST:
      return state.map(post => {
        if (post.id === id) {
          post.deleted = true;
        }
        return post;
      });
    case UP_VOTE_POST:
      return state.map(post => {
        if (post.id === id) {
          post["voteScore"] = parseInt(post["voteScore"], 10) + 1;
        }
        return post;
      });
    case DOWN_VOTE_POST:
      return state.map(post => {
        if (post.id === id) {
          post["voteScore"] = parseInt(post["voteScore"], 10) - 1;
        }
        return post;
      });
    default:
      return state;
  }
}

export default post;
