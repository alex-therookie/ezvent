import { csrfFetch } from "./csrf";

const GET_EVENTS = "events/GET_EVENTS";

export const fetchEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

export const getEvents = (categoryId) => async (dispatch) => {
  console.log("IN GETEVENTS", categoryId);
  const res = await csrfFetch(`/api/events/${categoryId}`);
  const events = await res.json();

  dispatch(fetchEvents(events));
  return events;
};

const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS: {
      return {
        ...state,
        events: action.events,
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
