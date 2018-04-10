import { ON_GET_POSTS } from "../actions";

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
    default:
      return state;
  }
}

export default post;
