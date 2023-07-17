import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ArtistPage({ currentArtist }) {
  const [data, setData] = useState({});
  const [topTrackData, setTopTrackData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://www.theaudiodb.com/api/v1/json/523532/artist.php?i=${param.id}`
    )
      .then((r) => r.json())
      .then((data) => {
        setData(data.artists[0]);
        let arr = data.artists[0].strArtist;
        arr = arr.split(" ");
        arr = arr.join("%20");

        fetch(
          `https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=${arr}`
        )
          .then((r) => r.json())
          .then((data) => setTopTrackData(data.track));

        fetch(
          `https://theaudiodb.com/api/v1/json/523532/album.php?i=${param.id}`
        )
          .then((r) => r.json())
          .then((data) => {
            const albumArr = data.album.filter((album) => {
              if (album.strReleaseFormat === "Album") {
                return album;
              } else {
                return false;
              }
            });
            setAlbums(albumArr);
          });
      });
  }, []);

  const trackList = topTrackData.map((track) => {
    return (
      <div key={track.idTrack} style={{ textAlign: "left" }}>
        {track.strTrack} on {track.strAlbum}
      </div>
    );
  });

  const albumList = albums.map((album) => {
    return (
      <img
        key={album.idAlbum}
        src={album.strAlbumThumb}
        style={{ width: "150px" }}
      />
    );
  });
  console.log("hello");

  return (
    <div>
      <h1>{data.strArtist}</h1>
      <img src={data.strArtistBanner} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            Albums
            <ul>{albumList}</ul>
          </div>
          <div className="col-md-4">
            Top Tracks
            <ul>{trackList}</ul>
          </div>
          <div className="row">
            <div className="col-md-12">Bio:</div>
            <div className="col-md-12" style={{ textAlign: "left" }}>
              <span style={{ textAlign: "left" }}>{data.strBiographyEN}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
