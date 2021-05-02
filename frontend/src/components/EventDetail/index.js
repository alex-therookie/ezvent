import "./EventDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getEventDetail } from "../../store/events";
const EventDetail = () => {
  const dateFormat = require("dateformat");
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.currentEvent);
  console.log(event);

  useEffect(() => {
    dispatch(getEventDetail(eventId));
  }, [eventId, dispatch]);

  if (!event) return null;

  const date = dateFormat(event.date, "mmmm d, yyyy");
  //   const time = dateFormat(event.time, "h:MM:ss TT");

  return (
    <div className="event-detail-container">
      <div className="event-detail-card">
        <div className="event-detail-img">
          <img src={`${event.photoUrl}`}></img>
        </div>
        <div className="event-detail-title">
          <h2>{event?.title}</h2>
        </div>
        <div className="event-detail-description">
          <div>About this Event:</div>
          <div>{event?.description}</div>
        </div>
      </div>
      <div className="event-register-card">
        <button id="register-btn">Register</button>
        <div id="register-date">
          <span>Date: </span>
          {date}
        </div>
        <div id="register-location">
          <span>Location: </span>
          {event.location}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
