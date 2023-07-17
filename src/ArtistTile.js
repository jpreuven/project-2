import React from "react";

export default function ArtistTile({ currentArtist }) {
  console.log(currentArtist);
  if (currentArtist) {
    return (
      <div className="container">
        <div style={{ maxWidth: "10%" }}>
          <h1>Artists:</h1>
        </div>
        <div className="row">
          <div className="col-md-2">
            <img
              style={{ width: "100px" }}
              src={`${currentArtist.strArtistCutout}`}
            />
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-left">
            <h1>{currentArtist.strArtist}</h1>
          </div>
          <div className="col-md-4 justify-content-left">
            <div className="container">
              <div className="row">
                <div className="justify-content-left">
                  <p style={{ textAlign: "left" }}>
                    Genre: {`${currentArtist.strGenre}`}
                  </p>
                  <p style={{ textAlign: "left" }}>
                    Country: {`${currentArtist.strCountry}`}
                  </p>
                  <p style={{ textAlign: "left" }}>
                    <span
                      style={{
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Bio: {`${currentArtist.strBiographyEN}`}
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
