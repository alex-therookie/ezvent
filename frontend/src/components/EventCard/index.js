import "./EventCard.css";

const EventCard = ({ event }) => {
  console.log("FROM EVENTCARD");
  return (
    <div className="event-card-container">
      <h2>{event.title}</h2>
      <img src={`${event.photoUrl}`}></img>
    </div>
  );
};

export default EventCard;
