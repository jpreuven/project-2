import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AlbumList from "./AlbumList";
import ArtistTile from "./ArtistTile";

export default function SearchResult() {
  const [currentArtist, setCurrentArtist] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://theaudiodb.com/api/v1/json/523532/search.php?s=${param.result}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.artists !== null) {
          setCurrentArtist(data.artists[0]);
        } else {
          setCurrentArtist(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, []);

  return (
    <div>
      <ArtistTile currentArtist={currentArtist} />

      <AlbumList param={param} currentArtist={currentArtist} />
    </div>
  );
}
// }
