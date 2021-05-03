import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import EventCard from "./components/EventCard";
import CreateEventPage from "./components/CreateEventPage";
import EventDetail from "./components/EventDetail";
import RegistrationsPage from "./components/RegistrationsPage";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    async function restoreUser() {
      await dispatch(sessionActions.userRestore());
      setIsLoaded(true);
    }
    restoreUser();
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/events/new">
            <CreateEventPage />
          </Route>
          <Route path="/events/:eventId">
            <EventDetail />
          </Route>
          <Route path="/registrations">
            <RegistrationsPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
