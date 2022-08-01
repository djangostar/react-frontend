import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <NavLink
                to="/"
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
                className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
                end
              >
                Home
                </NavLink>
            <NavLink
                to="/platforms/new"
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
                className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
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
                className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
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
                className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
                end
              >
                Display List
            </NavLink>
        </div>
    )
}

export default NavBar