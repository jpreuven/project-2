import React, { useEffect, useState } from "react";
import CurrentTrending from "./CurrentTrending";
import MostLoved from "./MostLoved";

export default function Discover() {
  const [currentTrending, setCurrentTrending] = useState([]);
  const [mostLoved, setMostLoved] = useState([]);

  useEffect(() => {
    // Fetch current trending data
    fetch(
      "https://theaudiodb.com/api/v1/json/523532/trending.php?country=us&type=itunes&format=singles"
    )
      .then((response) => response.json())
      .then((data) => setCurrentTrending(data.trending));

    // Fetch most loved data
    fetch(
      "https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=track"
    )
      .then((response) => response.json())
      .then((data) => setMostLoved(data.loved));
  }, []);

  return (
    <div>
      <h1>Current Trending:</h1>
      <CurrentTrending data={currentTrending} />
      <h1>Most Loved:</h1>
      <MostLoved data={mostLoved} />
    </div>
  );
}
