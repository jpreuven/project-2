import React from "react";
import CurrentTrending from "./CurrentTrending";
import MostLoved from "./MostLoved";

export default function Discover({ data }) {
  console.log(data.loved);
  return (
    <div>
      <CurrentTrending />
      <MostLoved />
    </div>
  );
}
