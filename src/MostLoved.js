import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function MostLoved({ data }) {
  const [artistImages, setArtistImages] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchArtistImages = () => {
      const requests = data.map((track) =>
        fetch(
          `https://theaudiodb.com/api/v1/json/523532/search.php?s=${track.strArtist}`
        )
          .then((response) => response.json())
          .then((data) => ({
            artist: track.strArtist,
            image: data.artists?.[0]?.strArtistThumb || null,
          }))
      );

      Promise.all(requests)
        .then((results) => {
          const images = {};
          results.forEach((result) => {
            images[result.artist] = result.image;
          });
          setArtistImages(images);
        })
        .catch((error) => {
          console.error("Error fetching artist images:", error);
        });
    };

    fetchArtistImages();
  }, [data]);

  const handleClick = (artistId) => {
    history.push(`/artist/${artistId}`);
  };

  return (
    <div className="track-container most-loved">
      {data.map((track) => (
        <div
          key={track.idTrack}
          className="track-item"
          onClick={() => handleClick(track.idArtist)}
        >
          <img
            src={track.strTrackThumb || artistImages[track.strArtist]}
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
