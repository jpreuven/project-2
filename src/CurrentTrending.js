import React, { useEffect, useState } from "react";

export default function CurrentTrending() {
  const [trendingTracks, setTrendingTracks] = useState([]);

  useEffect(() => {
    const fetchTrendingTracks = () => {
      fetch(
        "https://theaudiodb.com/api/v1/json/523532/trending.php?country=us&type=itunes&format=singles"
      )
        .then((response) => response.json())
        .then((data) => setTrendingTracks(data.trending || []))
        .catch((error) => {
          console.error("Error fetching trending tracks:", error);
        });
    };

    fetchTrendingTracks();
  }, []);

  return (
    <div>
      {trendingTracks.map((track) => (
        <div key={track.idTrack}>
          <h3>{track.strTrack}</h3>
          <p>Artist: {track.strArtist}</p>
          <p>Album: {track.strAlbum}</p>
          <img
            src={track.strTrackThumb || track.strArtistThumb}
            alt={track.strTrack}
            style={{ width: "200px", height: "200px" }}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}
