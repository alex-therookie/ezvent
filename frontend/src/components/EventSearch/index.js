import { NavLink } from "react-router-dom";
import { useSearch} from "../../context/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EventCard from "../EventCard"
import "./EventSearch.css";

const EventSearch = () => {
    // const dispatch = useDispatch();
    const [events, setEvents] = useState();
    const { searchInput, setSearchInput } = useSearch();

    useEffect(() => {
        fetch("api/events/").then(res => res.json()).then(res => setEvents(res))
    }, []);

    const searchedEvents = events?.filter(event => {
        return (event.title.toLowerCase().includes(searchInput.toLowerCase())
        || searchInput.length < 3);
    })

  return (
    <>
      <h2 className="search-title">Events</h2>
      <input placeholder="Search events" className="search-events-input" onChange={(e) => setSearchInput(e.target.value)} value={searchInput}></input>
      <div className="events-container" >
        {searchedEvents &&
          searchedEvents.map((event) => {
            return <EventCard event={event} />;
          })}
      </div>
    </>
  );
};

export default EventSearch;
