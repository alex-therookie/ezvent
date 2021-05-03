import "./RegistrationPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRegistrations } from "../../store/events";

const RegistrationsPage = () => {
  const dispatch = useDispatch();

  const registeredEvents = useSelector((state) => state.events.registrations);

  useEffect(() => {
    dispatch(getAllRegistrations());
  }, [dispatch]);

  return <div className="registrations-container"></div>;
};

export default RegistrationsPage;
