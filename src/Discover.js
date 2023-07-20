import React, { useEffect, useState } from "react";
import CurrentTrending from "./CurrentTrending";
import MostLoved from "./MostLoved";

export default function Discover() {
  const [currentTrending, setCurrentTrending] = useState([]);
  const [mostLoved, setMostLoved] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state variable

  useEffect(() => {
    fetch(
      "https://theaudiodb.com/api/v1/json/523532/trending.php?country=us&type=itunes&format=singles"
    )
      .then((r) => r.json())
      .then((data) => setCurrentTrending(data.trending));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=track"
      );
      const data = await response.json();
      setMostLoved(data.loved);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
       // background: "	rgb(20,20,20)",
       // height: isLoading ? "250vh" : "700vh",
      }}
    >
      <h1 className="header">Current Trending:</h1>
      <CurrentTrending data={currentTrending} />
      <div style={{ marginTop: "100px" }}>
        <h1 className="header">Most Loved:</h1>
        <MostLoved data={mostLoved} isLoading={isLoading} />
      </div>
    </div>
  );
}
