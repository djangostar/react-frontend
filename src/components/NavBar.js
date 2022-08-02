import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontSize: "30px",
          fontFamily: "Press Start 2P",
          display: "inline-block",
          width: "120px",
          padding: "12px",
          margin: "5px",
          background: "none",
          textDecoration: "blink",
          color: isActive ? "yellow" : "purple",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/platforms/new"
        style={({ isActive }) => ({
          fontSize: "30px",
          display: "inline-block",
          width: "150px",
          padding: "12px",
          margin: "0 6px 6px",
          background: "none",
          textDecoration: "blink",
          color: isActive ? "yellow" : "purple",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Add Platform
      </NavLink>
      <NavLink
        to="/games/new"
        style={({ isActive }) => ({
          fontSize: "30px",
          display: "inline-block",
          width: "100px",
          padding: "12px",
          margin: "0 6px 6px",
          background: "none",
          textDecoration: "blink",
          color: isActive ? "darkred" : "darkblue",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Add Game
      </NavLink>
      <NavLink
        to="/display"
        style={({ isActive }) => ({
          fontSize: "30px",
          display: "inline-block",
          width: "100px",
          padding: "12px",
          margin: "0 6px 6px",
          background: "none",
          textDecoration: "blink",
          color: isActive ? "darkred" : "darkblue",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Display List
      </NavLink>
      <hr />
    </div>
  );
};

export default NavBar;
