import React, { useEffect, useState } from "react";

export default function MostLoved({ data }) {
  const [artistImages, setArtistImages] = useState({});

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

  return (
    <div>
      {data.map((track) => (
        <div key={track.idTrack}>
          <h3>{track.strTrack}</h3>
          <p>Artist: {track.strArtist}</p>
          <p>Album: {track.strAlbum}</p>
          <img
            src={track.strTrackThumb || artistImages[track.strArtist]}
            alt={track.strTrack}
            style={{ width: "200px", height: "200px" }}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}
