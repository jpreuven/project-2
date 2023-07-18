import React, { useEffect, useState } from "react";
import CurrentTrending from "./CurrentTrending";
import MostLoved from "./MostLoved";

export default function Discover() {
  const [currentTrending, setCurrentTrending] = useState([]);
  const [mostLoved, setMostLoved] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current trending data
        const trendingResponse = await fetch(
          "https://theaudiodb.com/api/v1/json/523532/trending.php?country=us&type=itunes&format=singles"
        );
        const trendingData = await trendingResponse.json();
        setCurrentTrending(trendingData.trending);

        // Fetch most loved data
        const mostLovedResponse = await fetch(
          "https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=track"
        );
        const mostLovedData = await mostLovedResponse.json();
        setMostLoved(mostLovedData.loved);

        setIsLoading(false); // Update isLoading state when data fetching is complete
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="Loading"
          className="loading-gif"
        />
      </div>
    );
  }

  return (
    <div>
      <h1 className="header">Current Trending:</h1>
      <CurrentTrending data={currentTrending} />
      <div style={{ marginTop: "100px" }}>
        <h1 className="header">Most Loved:</h1>
        <MostLoved data={mostLoved} />
      </div>
    </div>
  );
}
