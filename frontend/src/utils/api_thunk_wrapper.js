import * as API from "../utils/api";

import { receiveCategories } from "../actions";

export const fetchCategories = () => dispatch =>
  API.getAllCategories().then(categories =>
    dispatch(receiveCategories(categories))
  );
