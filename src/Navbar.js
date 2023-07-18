import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="container"
      style={{ display: "flex", marginLeft: "20px", marginTop: "5px" }}
    >
      <NavLink
        style={{
          backgroundColor: "rgb(40,40,40)",
          color: "white",
          padding: "10px 75px",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          marginRight: "2px",
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{
          backgroundColor: "rgb(40,40,40)",
          color: "white",
          padding: "10px 75px",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        to="/discover"
      >
        Discover
      </NavLink>
    </div>
  );
}

// backgroundColor: "rgb(40,40,40)",
// color: "white",
// padding: "10px 75px",
// borderRadius: "5px",
// fontSize: "16px",
// cursor: "pointer",
