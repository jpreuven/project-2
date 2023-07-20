import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyle = {
    backgroundColor: "rgb(40,40,40)",
    color: "white",
    padding: "10px 75px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginRight: "15px",
    textDecoration: "none",
  };

  const navLinkHoverStyle = {
    backgroundColor: "rgb(69, 208, 255)",
  };

  return (
    <div className="container" style={{ display: "flex", marginTop: "5px" }}>
      <NavLink
        style={navLinkStyle}
        to="/"
        exact
        onMouseEnter={(e) => e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = navLinkStyle.backgroundColor}
      >
        Home
      </NavLink>
      <NavLink
        style={navLinkStyle}
        to="/discover"
        onMouseEnter={(e) => e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = navLinkStyle.backgroundColor}
      >
        Discover
      </NavLink>
    </div>
  );
}
