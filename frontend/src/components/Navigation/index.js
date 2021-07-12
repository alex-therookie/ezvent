import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useSearch} from "../../context/SearchContext"
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import ezVentLogo from "../../img/ezp-logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const { searchInput, setSearchInput } = useSearch();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/events/new">
          <button className="nav-btn create-btn">
            Create Event
            <i className="fas fa-plus nav-btn-plus"></i>
          </button>
        </NavLink>
        <NavLink to={"/registrations"}>
          <button className="nav-btn">My Events</button>
        </NavLink>
        <NavLink to={"/favorites"}>
          <button className="nav-btn">Favorites</button>
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">
          <button className="nav-btn" type="button">
            Sign Up
          </button>
        </NavLink>
      </>
    );
  }

  return (
    <nav>
      <div id="logo-search">
        <NavLink id="logo" exact to="/">
          <img className="logo-img" src={ezVentLogo} alt="logo"></img>
        </NavLink>
        <div className="search">
          <input
          placeholder="Search"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          />
          <button id="navbar-search-btn" className="nav-btn" type="button">
            <i class="fas fa-search "></i>
          </button>
        </div>
      </div>
      <ul className="sessionlink-container">{isLoaded && sessionLinks}</ul>
    </nav>
  );
}

export default Navigation;
