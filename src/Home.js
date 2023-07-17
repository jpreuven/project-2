import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home({ search, handleSearch, handleSubmit }) {
  function onChange(e) {
    handleSearch(e.target.value);
  }

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    history.push(`/SearchResult/${search}`);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={search} onChange={onChange}></input>
        <button> Search!</button>
      </form>
    </div>
  );
}
