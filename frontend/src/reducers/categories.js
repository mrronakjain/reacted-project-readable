import { ON_GET_CATEGORY } from "../actions";

function category(state = {}, action) {
  const { categories } = action;
  switch (action.type) {
    case ON_GET_CATEGORY:
      let result = categories["categories"].reduce((obj, item) => {
        obj[item.name] = item;
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

export default category;
