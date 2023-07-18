import React from "react";
import { useHistory } from "react-router-dom";

export default function CurrentTrending({ data }) {
  // console.log(data);
  const history = useHistory();

  const handleArtistClick = (artistId) => {
    history.push(`/artist/${artistId}`);
  };

  return (
    <div className="track-container">
      {data.map((track) => (
        <div
          key={track.idTrack}
          className="track-item"
          onClick={() => handleArtistClick(track.idArtist)} // Add onClick event handler
        >
          <img
            src={track.strTrackThumb || track.strArtistThumb}
            alt={track.strTrack}
            style={{ width: "375px", height: "375px" }}
          />
          <div className="track-info">
            <h3>{track.strTrack}</h3>
            <p>Artist: {track.strArtist}</p>
            <p>Album: {track.strAlbum}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
