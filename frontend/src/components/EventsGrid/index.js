import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../EventCard";
import { getEvents } from "../../store/events";
import "./EventsGrid.css";

const EventsGrid = ({ category }) => {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEventsArr() {
      const eventsArr = await dispatch(getEvents(category));
      setEvents(eventsArr);
    }

    getEventsArr();
  }, [dispatch, category]);

  return (
    <div className="events-container">
      {events?.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventsGrid;
