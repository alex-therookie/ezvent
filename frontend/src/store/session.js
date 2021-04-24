import { csrfFetch } from "./csrf";

const ADD_USER = "session/ADD_USER";
const REMOVE_USER = "session/REMOVE_USER";

const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const userLogin = ({ credential, password }) => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });

  if (res.ok) {
    const { user } = await res.json();
    dispatch(addUser(user));
    return user;
  }
};

const sessionReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default sessionReducer;
