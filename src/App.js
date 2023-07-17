import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ArtistPage from "./ArtistPage";
import { Route, Switch } from "react-router-dom";
import Discover from "./Discover";
import SearchResult from "./SearchResult";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://www.theaudiodb.com/api/v1/json/523532/mostloved.php?format=album"
    )
      .then((r) => r.json())
      .then((data) => setData(data.loved));
  }, []);

  // console.log(data);

  function handleSearch(e) {
    setSearch(e);
  }

  function handleSubmit(e) {
    console.log(e);
  }

  return (
    <div className="App Container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 mb-5 mt-5">
          <Navbar />
        </div>
      </div>
      <Switch>
        <Route path="/discover">
          <Discover data={data} />
        </Route>
        <Route path="/SearchResult/:result">
          <SearchResult search={search} />
        </Route>
        <Route path="/:artist">
          <ArtistPage />
        </Route>
        <Route exact path="/">
          <Home
            search={search}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
