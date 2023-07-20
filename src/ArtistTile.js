import React from "react";
import { useHistory } from "react-router-dom";

export default function ArtistTile({ currentArtist }) {
  function handleClick() {
    history.push(`/artist/${currentArtist.idArtist}`);
  }

  const history = useHistory();

  if (currentArtist) {
    const artistImage =
      currentArtist.strArtistCutout || currentArtist.strArtistThumb;

    return (
      <div className="container" style={{ marginTop: "200px", background: "rgb(20,20,20)", height: "100%",}}>
        <div className="row">
          <div className="col-md-2">
            <h1 style={{ marginBottom: "10px", }}>Artists:</h1>
            <img
              style={{ width: "300px", height: "300px", cursor: "pointer" }}
              src={artistImage}
              alt={currentArtist.strArtist}
              onClick={handleClick}
            />
          </div>
          <div className="col-md-4" style= {{marginLeft: "100px"}}>
            <div className="container">
              <div className="row">
                <div className="justify-content-left">
                  {/* strArtist heading */}
                  <h1>{currentArtist.strArtist}</h1>
                  <p style={{ textAlign: "left", }}>
                    <strong style={{ fontSize: "18px" }}>Genre:</strong>{" "}
                    {`${currentArtist.strGenre}`}
                  </p>
                  <p style={{ textAlign: "left" }}>
                    <strong style={{ fontSize: "18px" }}>Country:</strong>{" "}
                    {`${currentArtist.strCountry}`}
                  </p>
                  <p style={{ textAlign: "left" }}>
                    <strong style={{ fontSize: "18px" }}>Bio:</strong>{" "}
                    <span
                      style={{
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {`${currentArtist.strBiographyEN}`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>No Artist Found</h1>;
  }
}
