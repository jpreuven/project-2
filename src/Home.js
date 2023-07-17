import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home({ artistData, handleRandom }) {
  const [search, setSearch] = useState("");
  console.log(artistData);

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

  //   function handleRandom() {
  //     let randomNumber =
  //       Math.floor(Math.random() * (176070 - 111233 + 1)) + 111233;
  //     console.log(randomNumber);
  //     if (artistData) {
  //       console.log(artistData === {});
  //       history.push(`/artist/${randomNumber}`);
  //     }
  //   }

  return (
    <div>
      <form onSubmit={onSubmit} style={{ border: "red" }}>
        <input value={search} onChange={onChange}></input>
        <button> Search!</button>
      </form>
      <button onClick={handleRandom}>Random Artist</button>
    </div>
  );
}
