import "./EventDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getEventDetail,
  registerUser,
  getAllRegistrations,
} from "../../store/events";

const EventDetail = () => {
  const dateFormat = require("dateformat");
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.currentEvent);
  const isRegistered = useSelector((state) =>
    state.events.registrations?.some((event) => event.id.toString() === eventId)
  );

  useEffect(() => {
    dispatch(getAllRegistrations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEventDetail(eventId));
  }, [eventId, dispatch]);

  const handleRegister = () => {
    dispatch(registerUser(eventId));
  };

  if (!event) return null;

  const date = dateFormat(event.date, "mmmm d, yyyy");

  console.log("ISREGISTERED", isRegistered);

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
        {isRegistered ? (
          <button disabled={true} id="unregister-btn">
            Registered
          </button>
        ) : (
          <button onClick={(e) => handleRegister()} id="register-btn">
            Register
          </button>
        )}
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
