import { csrfFetch } from "./csrf";

const GET_CATEGORIES = "categories/GET_CATEGORIES";
const SET_CATEGORY = "categories/SET_CATEGORY";

export const fetchCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories,
  };
};

export const setCategory = (categoryId) => {
  return {
    type: SET_CATEGORY,
    categoryId,
  };
};

export const getCategories = () => async (dispatch) => {
  console.log("from getCategories store");
  const res = await csrfFetch("/api/categories");
  console.log("from getCategories store", res);
  const categories = await res.json();

  dispatch(fetchCategories(categories));
};

const categoriesReducer = (state = { currCatId: 1 }, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        list: action.categories,
      };

    case SET_CATEGORY:
      return {
        ...state,
        currCatId: action.categoryId,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
