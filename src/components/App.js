import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import CreatePlatformForm from "./CreatePlatformForm";
import CreateGameForm from "./CreateGameForm";
import DisplayGames from "./DisplayGames";
import "../stylesheets/App.css";
import background from "./background-img.webp";

function App() {
  const [games, setGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    // get all games
    fetch("http://localhost:9292/games")
      .then((res) => res.json())
      .then(setGames);
    // console.log(games)
    // get all platforms
    fetch("http://localhost:9292/platforms")
      .then((res) => res.json())
      .then(setPlatforms);
    // console.log(platforms)
  }, []);

  const onAddPlatform = (platform) => {
    fetch("http://localhost:9292/platforms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(platform),
    })
      .then((res) => res.json())
      .then((newPlatform) => {
        setPlatforms([newPlatform, ...platforms]);
      });
  };

  const onAddGame = (game) => {
    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((newGame) => {
        setGames([newGame, ...games]);
      });
  };

  const handleChange = (game, currently_playing) => {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...game, currently_playing: currently_playing }),
    })
      .then((res) => res.json())
      .then((data) => {
        setGames(
          games.map((g) => {
            if (game.id === data.id) {
              return data;
            } else {
              return g;
            }
          })
        );
      });
  };

  const handleDeleteGame = (id) => {
    fetch(`http://localhost:9292/games/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setGames(games.filter((g) => g.id !== id));
      });
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        // position: "100%",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/platforms/new"
          element={
            <CreatePlatformForm
              platforms={platforms}
              onAddPlatform={onAddPlatform}
            />
          }
        />
        <Route
          path="/games/new"
          element={
            <CreateGameForm onAddGame={onAddGame} platforms={platforms} />
          }
        />
        <Route
          path="/display"
          element={games.map((g) => (
            <DisplayGames
              game={g}
              handleChange={handleChange}
              handleDeleteGame={handleDeleteGame}
              key={`${g.id}${g.title}`}
            />
          ))}
        />
      </Routes>
    </div>
  );
}

export default App;
