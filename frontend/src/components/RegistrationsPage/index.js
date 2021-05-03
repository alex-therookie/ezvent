import "./RegistrationsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRegistrations } from "../../store/events";
import EventCard from "../EventCard";

const RegistrationsPage = () => {
  const dispatch = useDispatch();

  const registeredEvents = useSelector((state) => state.events.registrations);

  useEffect(() => {
    dispatch(getAllRegistrations());
  }, [dispatch]);

  return (
    <div className="registrations-container">
      {registeredEvents &&
        registeredEvents.map((event) => {
          return <EventCard event={event} />;
        })}
    </div>
  );
};

export default RegistrationsPage;
