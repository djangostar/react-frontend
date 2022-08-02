import React, { useState } from "react";
const Display = ({ game, handleChange, handleDelete }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="container">
      <h3>Title: {game.title}</h3>
      <p>Genre: {game.genre}</p>
      <p>Review: {game.review}</p>
      <p>Year Released: {game.year_released}</p>
      <p>Platform: {game.platform.platform_name}</p>
      {isPlaying ? (
        <button
          onClick={() => {
            handleChange(game, false);
            setIsPlaying(false);
          }}
        >
          Not Playing
        </button>
      ) : (
        <button
          onClick={() => {
            handleChange(game, true);
            setIsPlaying(true);
          }}
        >
          Currently Playing
        </button>
      )}
      <button onClick={() => handleDelete(game.id)}>Delete Game</button>
      <hr />
    </div>
  );
};

export default Display;
