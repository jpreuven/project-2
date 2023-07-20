import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function MostLoved({ data, isLoading }) {
  const [artistImages, setArtistImages] = useState({});
  const history = useHistory();

  const handleClick = (artistId) => {
    history.push(`/artist/${artistId}`);
  };

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
    <div className="track-container most-loved">
      {data.map((track) => (
        <div
          key={track.idTrack}
          className="track-item"
          onClick={() => handleClick(track.idArtist)}
        >
          <img
            src={
              track.strTrackThumb ||
              "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg"
            }
            // src={track.strTrackThumb}
            alt={track.strTrack}
            style={{ width: "350px", height: "350px" }}
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
