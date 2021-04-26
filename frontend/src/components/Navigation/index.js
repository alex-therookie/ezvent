import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import ezVentLogo from "../../img/ezp-logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        {/* // TODO Replace buttons with components */}
        <button className="nav-btn">
          Create Event
          <i className="fas fa-plus nav-btn-plus"></i>
        </button>
        <button className="nav-btn">Registrations</button>
        <button className="nav-btn">Favorites</button>
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
          <img src={ezVentLogo} alt="logo"></img>
        </NavLink>
        <div className="search">
          <input placeholder="Search" type="text" />
          <button id="navbar-search-btn" className="nav-btn" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <ul className="sessionlink-container">{isLoaded && sessionLinks}</ul>
    </nav>
  );
}

export default Navigation;
