import "./FavoritesPage.css";
import "../EventsGrid/EventsGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFavorites } from "../../store/events";
import EventCard from "../EventCard";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const favoritedEvents = useSelector((state) => state.events.favorites);

  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);

  return (
    <>
      <h2 id="favorites-title">My Favorites</h2>
      <div className="events-container">
        {favoritedEvents &&
          favoritedEvents.map((event) => {
            return <EventCard event={event} />;
          })}
      </div>
    </>
  );
};

export default FavoritesPage;
