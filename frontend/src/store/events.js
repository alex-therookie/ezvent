import { csrfFetch } from "./csrf";

const GET_EVENTS = "events/GET_EVENTS";
const ADD_EVENT = "events/ADD_EVENT";
const GET_EVENT = "events/GET_EVENT";
const REGISTER_USER = "events/REGISTER_USER";
const GET_REGISTRATIONS = "events/GET_REGISTRATIONS";

export const fetchRegistrations = (registrations) => {
  return {
    type: GET_REGISTRATIONS,
    registrations,
  };
};

export const fetchEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

export const registerOneUser = (event) => {
  return {
    type: REGISTER_USER,
    event,
  };
};

export const addOneEvent = (event) => {
  return {
    type: ADD_EVENT,
    event,
  };
};

export const fetchEventDetail = (event) => {
  return {
    type: GET_EVENT,
    event,
  };
};

export const getEvents = (categoryId) => async (dispatch) => {
  console.log("IN GETEVENTS", categoryId);
  const res = await csrfFetch(`/api/categories/${categoryId}`);
  const events = await res.json();

  dispatch(fetchEvents(events));
  return events;
};

export const getEventDetail = (eventId) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${eventId}`);
  const event = await res.json();

  dispatch(fetchEventDetail(event));
  return event;
};

export const getAllRegistrations = () => async (dispatch) => {
  const res = await csrfFetch("/api/events/registrations");
  const registrations = await res.json();

  dispatch(fetchRegistrations(registrations));
};

export const registerUser = (eventId) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${eventId}/registration`, {
    method: "POST",
  });
  const event = await res.json();

  dispatch(registerOneUser(event));
  return event;
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

    case GET_EVENT: {
      return {
        ...state,
        currentEvent: action.event,
      };
    }

    case REGISTER_USER: {
      if (state.registrations) {
        return {
          ...state,
          registrations: [...state.registrations, action.event],
        };
      } else {
        return {
          ...state,
          registrations: [action.event],
        };
      }
    }

    case GET_REGISTRATIONS: {
      return {
        ...state,
        registrations: action.registrations,
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
