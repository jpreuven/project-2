import React from "react";

export default function AlbumTile({ album }) {
  return (
    <div className="col-md-2" style={{ width: "150px", background: "rgb(20,20,20)", height: "100%",}}>
      <img style={{ width: "100px" }} src={album.strAlbumThumb} />
      <figure
        style={{
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {album.strAlbum}
      </figure>
    </div>
  );
}
