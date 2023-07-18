import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home({ artistData, handleRandom }) {
  const [search, setSearch] = useState("");
  //   console.log(artistData);

  function onChange(e) {
    setSearch(e.target.value);
  }

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    if (search) {
      history.push(`/SearchResult/${search}`);
    } else {
      alert("You gotta search for something!");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "65vh",
      }}
    >
      <h1 style={{ fontSize: "130px" }}>Musicle</h1>
      <form onSubmit={onSubmit} style={{ border: "red" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            value={search}
            onChange={onChange}
            style={{
              width: "650px",
              height: "35px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "rgb(40,40,40)", // Set the background color
            color: "white", // Set the text color
            padding: "10px 75px", // Adjust padding for spacing
            borderRadius: "5px", // Add rounded corners
            fontSize: "16px", // Adjust font size
            cursor: "pointer", // Change the cursor on hover
            marginRight: "2px",
            // border: "none", // Remove default border
          }}
          className="home-buttons"
          type="submit"
        >
          Search!
        </button>
        <button
          style={{
            backgroundColor: "rgb(40,40,40)", // Set the background color
            color: "white", // Set the text color
            padding: "10px 75px", // Adjust padding for spacing
            borderRadius: "5px", // Add rounded corners
            fontSize: "16px", // Adjust font size
            cursor: "pointer", // Change the cursor on hover
            // border: "none",
          }}
          className="home-buttons"
          onClick={handleRandom}
        >
          Random Artist
        </button>
      </form>
    </div>
  );
}
