import React from "react";
import CurrentTrending from "./CurrentTrending";
import MostLoved from "./MostLoved";

export default function Discover({ data }) {
  return (
    <div>
      <CurrentTrending />
      <MostLoved />
    </div>
  );
}
