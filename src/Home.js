import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home({ artistData, handleRandom }) {
  const [search, setSearch] = useState("");

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
        height: "100vh",
        
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
           // Center the text horizontally
        }}
      >
        <h1
          style={{
            fontSize: "130px",
            fontFamily: "Helvetica, Arial, sans-serif",
            textAlign: "center", 
            marginTop: "-300px", // Center the text horizontally
          }}
        >
          Musicle
        </h1>
        <img
          src="https://i.ibb.co/cYsr5jx/DALL-E-2023-07-19-22-11-24-can-you-make-its-color-instead-of-yellow-the-rgb-value-of-69-208-255.png"
          alt="Musicle Logo"
          style={{ width: "100px", height: "100px", marginLeft: "25px", marginTop: "-300px",}}
        />
      </div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            value={search}
            onChange={onChange}
            placeholder="Search for any Band or Artist!"
            style={{
              width: "650px",
              height: "35px",
              marginBottom: "20px",
              borderRadius: "5px",
              textAlign: "center",
              border: "none",
              marginTop: "-75px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "250px", // Set the width for both buttons
              backgroundColor: "rgb(40,40,40)", // Set the background color
              color: "white", // Set the text color
              padding: "10px", // Adjust padding for spacing
              borderRadius: "5px", // Add rounded corners
              fontSize: "16px", // Adjust font size
              cursor: "pointer", // Change the cursor on hover
              marginRight: "40px",
              transition: "background-color 0.3s", // Adding a smooth transition
              border: "none", // Remove default border
            }}
            className="home-buttons"
            type="submit"
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgb(69, 208, 255)")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgb(40, 40, 40)")
            }
          >
            Search!
          </button>
          <button
            style={{
              width: "250px", // Set the width for both buttons
              backgroundColor: "rgb(40,40,40)", // Set the background color
              color: "white", // Set the text color
              padding: "10px", // Adjust padding for spacing
              borderRadius: "5px", // Add rounded corners
              fontSize: "16px", // Adjust font size
              cursor: "pointer", // Change the cursor on hover
              transition: "background-color 0.3s", // Adding a smooth transition
              border: "none",
            }}
            className="home-buttons"
            onClick={handleRandom}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgb(69, 208, 255)")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgb(40, 40, 40)")
            }
          >
            Random Artist
          </button>
        </div>
      </form>
    </div>
  );
}
