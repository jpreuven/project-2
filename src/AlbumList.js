import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AlbumTile from "./AlbumTile";

export default function AlbumList({}) {
  const [albumList, setAlbumList] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${param.result}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.album !== null) {
          const albumsToDisplay = data.album.filter((album) => {
            if (album.strReleaseFormat === "Album") {
              return album;
            } else {
              return false;
            }
          });
          setAlbumList(albumsToDisplay);
        } else {
          const noAlbum = [];
          setAlbumList(noAlbum);
        }
      });
  }, []);

  const albums = albumList.map((album) => {
    return <AlbumTile key={album.idAlbum} album={album} />;
  });

  return (
    <div className="container">
      {albumList.length > 0 ? (
        <div style={{ maxWidth: "10%" }}>
          <h1>Albums:</h1>
        </div>
      ) : null}
      <div className="row">{albums}</div>
    </div>
  );
}
