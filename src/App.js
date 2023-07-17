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
  const [currentArtist, setCurrentArtist] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.theaudiodb.com/api/v1/json/523532/mostloved.php?format=album"
    )
      .then((r) => r.json())
      .then((data) => setData(data.loved));
  }, []);

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
        <Route exact path="/artist/:id">
          <ArtistPage currentArtist={currentArtist} />
        </Route>
        <Route exact path="/SearchResult/:result">
          <SearchResult
            currentArtist={currentArtist}
            setCurrentArtist={setCurrentArtist}
          />
        </Route>
        <Route exact path="/">
          <Home handleSubmit={handleSubmit} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
