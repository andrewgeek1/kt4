import React from "react";
import "../styles/stars.css";

export default function Stars({ rating = 0 }) {
  const rounded = Math.round(rating);

  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rounded ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
