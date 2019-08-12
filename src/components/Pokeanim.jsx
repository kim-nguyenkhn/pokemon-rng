import React, { useEffect } from "react";
import "./styles.css";

const unopenedPokeball = "https://i.imgur.com/5oiq2uX.png";
const openedPokeball = "https://i.imgur.com/ilZCT7n.png";

export function PokeAnim() {
  const handleClick = (e) => {
    const img = e.target;
    img.src = openedPokeball;
    img.classList = "";
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <img
      id="pokeball"
        src={unopenedPokeball}
        className="pokeshake"
        onClick={handleClick}
      />
    </div>
  );
}
