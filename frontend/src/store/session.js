import { csrfFetch } from "./csrf";

const ADD_USER = "session/ADD_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const userRestore = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  const data = await res.json();

  dispatch(addUser(data.user));
  return res;
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
export const signupUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(addUser(data.user));
  return response;
};

export const logoutUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

const sessionReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.user,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
