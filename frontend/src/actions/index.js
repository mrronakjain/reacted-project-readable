export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORY,
    categories
  };
}
