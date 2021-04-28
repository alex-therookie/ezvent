import { csrfFetch } from "./csrf";

const GET_EVENTS = "events/GET_EVENTS";
const ADD_EVENT = "events/ADD_EVENT";

export const fetchEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

export const addOneEvent = (event) => {
  return {
    type: ADD_EVENT,
    event,
  };
};

export const getEvents = (categoryId) => async (dispatch) => {
  console.log("IN GETEVENTS", categoryId);
  const res = await csrfFetch(`/api/events/${categoryId}`);
  const events = await res.json();

  dispatch(fetchEvents(events));
  return events;
};

export const addEvent = (event) => async (dispatch) => {
  const res = await csrfFetch("/api/events/new", {
    method: "POST",
    body: JSON.stringify(event),
  });

  if (!res.ok) throw res;
  const newEvent = await res.json();
  console.log("FROM addEvent THUNK", newEvent);

  dispatch(addOneEvent(newEvent));
  return newEvent;
};

const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS: {
      return {
        ...state,
        events: action.events,
      };
    }
    case ADD_EVENT: {
      return {
        ...state,
        events: [...state.events, action.event],
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
