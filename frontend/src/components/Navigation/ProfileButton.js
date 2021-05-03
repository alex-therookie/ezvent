import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };

  return (
    <div className="profile-btn-container">
      <button className="nav-btn" id="profile-btn" onClick={openMenu}>
        Profile
        <i className="fas fa-user-circle" id="profile-img" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <NavLink to={"/"} className="profile-dropdow-links">
              {user.username}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="profile-dropdow-links"
              onClick={logout}
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
