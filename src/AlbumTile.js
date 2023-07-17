import React from "react";

export default function AlbumTile({ album }) {
  //   console.log(album);
  return (
    <div className="col-md-2" style={{ width: "125px" }}>
      <img style={{ width: "100px" }} src={album.strAlbumThumb} />
    </div>
  );
}
