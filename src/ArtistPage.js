import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ArtistPage.css";

export default function ArtistPage({ data, setData, handleRandom }) {
  const [topTrackData, setTopTrackData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [count, setCount] = useState(0);
  const [commentSection, setCommentSection] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://www.theaudiodb.com/api/v1/json/523532/artist.php?i=${param.id}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.artists !== null) {
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
              if (data.album !== null) {
                const albumArr = data.album.filter((album) => {
                  if (album.strReleaseFormat === "Album") {
                    return album;
                  } else {
                    return false;
                  }
                });
                setAlbums(albumArr);
              } else {
                setAlbums(false);
              }
            });
        } else {
          setData(false);
        }
      });
  }, [count]);

  useEffect(() => {
    fetch(`http://localhost:3000/comments`)
      .then((r) => r.json())
      .then((d) => {
        let artistList = d.filter((comment) => {
          if (comment.artistID == param.id) {
            return comment;
          } else {
            return false;
          }
        });
        setCommentSection(artistList);
      });
  }, []);

  let trackList = [];

  if (topTrackData !== null) {
    trackList = topTrackData.map((track) => {
      return (
        <div key={track.idTrack} style={{ textAlign: "left" }}>
          {track.strTrack} on {track.strAlbum}
        </div>
      );
    });
  } else {
    trackList = [
      <div key={Math.random()} style={{ textAlign: "left" }}>
        No top tracks found!
      </div>,
    ];
  }

  let albumList = [];

  if (albums !== false) {
    albumList = albums.map((album) => {
      return (
        <img
          key={album.idAlbum}
          src={album.strAlbumThumb}
          style={{ width: "150px" }}
        />
      );
    });
  }

  function onClick() {
    handleRandom();
    setCount(count + 1);
  }

  function handleSubmitComment(e) {
    e.preventDefault();

    const newObj = {
      comment: commentInput,
      artistID: Number(data.idArtist),
    };

    fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((r) => r.json())
      .then((data) => {
        setCommentSection([...commentSection, data]);
      });

    setCommentInput("");
  }

  let commentsToDisplay = commentSection.map((comment) => {
    return <p key={comment.id}>{comment.comment}</p>;
  });

  return data ? (
    <div>
      <h1>{data.strArtist}</h1>
      <img src={data.strArtistBanner} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            Albums
            {albums ? <ul>{albumList}</ul> : <p>No albums found!</p>}
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
      <form onSubmit={handleSubmitComment}>
        <textarea
          className="comment-input"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        ></textarea>
        <button type="submit">Submit Comment</button>
      </form>
      <div className="comment-section">
        <strong>Comment Section</strong>
        <ul>{commentsToDisplay}</ul>
      </div>
    </div>
  ) : (
    <div>
      <h1>It appears something has gone wrong...</h1>
      <button onClick={onClick}>Try again!</button>
    </div>
  );
}
