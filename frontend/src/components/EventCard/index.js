import "./EventCard.css";
import { NavLink } from "react-router-dom";

const EventCard = ({ event }) => {
  console.log("FROM EVENTCARD");
  return (
    <NavLink to={`/events/${event.id}`}>
      <div className="event-card-container">
        <h2>{event.title}</h2>
        <img src={`${event.photoUrl}`}></img>
      </div>
    </NavLink>
  );
};

export default EventCard;
