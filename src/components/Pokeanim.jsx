import React, { useEffect } from "react";
import "./styles.css";

export function PokeAnim() {
  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        src={"https://i.imgur.com/5oiq2uX.png"}
        className="pokeshake"
        onClick={handleClick}
      />
    </div>
  );
}
