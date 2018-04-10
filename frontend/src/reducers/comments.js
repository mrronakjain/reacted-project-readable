import { ON_GET_COMMENTS } from "../actions";

/**
 * Attribute	 Type	 Description
 * id			 String	 Unique identifier
 * parentId		 String	 id of the parent post
 * timestamp	 Integer Time created - default data tracks this in Unix time. You can use Date.now() to get this number
 * body			 String	 Comment body
 * author		 String	 Comment author
 * voteScore	 Integer Net votes the post has received (default: 1)
 * deleted		 Boolean Flag if comment has been 'deleted' (inaccessible by the front end), (default: false)
 * parentDeleted Boolean Flag for when the the parent post was deleted, but the comment itself was not.
 */

function comment(state = {}, action) {
  const {
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted,
    comments
  } = action;
  let newCommentsArray = [];
  switch (action.type) {
    case ON_GET_COMMENTS:
      let result = comments.reduce((obj, item) => {
        if (!obj.hasOwnProperty(item.parentId)) {
          obj[item.parentId] = [item];
        } else {
          obj[item.parentId].push(item);
        }

        return obj;
      }, {});
      return {
        ...state,
        ...result
      };
    default:
      return state;
  }
}

export default comment;
