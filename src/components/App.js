import React, { useState, useEffect } from 'react';
import CreatePlatformForm from './CreatePlatformForm';
import CreateGameForm from './CreateGameForm';
import '../App.css';

function App() {
    const [games, setGames] = useState([])
    const [platforms, setPlatforms] = useState([])

    useEffect(() => {
      // get all games
      fetch('http://localhost:9292/games')
        .then(res => res.json())
        .then(setGames)
        // console.log(games)
      // get all platforms
      fetch('http://localhost:9292/platforms')
        .then(res => res.json())
        .then(setPlatforms)
        // console.log(platforms)
    }, [])

    const onAddPlatform = (platform) => {
      fetch('http://localhost:9292/platforms', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(platform)
      })
        .then(res => res.json())
        .then(newPlatform => {
          setPlatforms([newPlatform, ...platform])
        })
      }
      
    const onAddGame = (game) => {
      fetch('http://localhost:9292/games', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
      })
        .then(res => res.json())
        .then(newGame => {
          setPlatforms([newGame, ...game])
        })
      }

  return (
    <div className="App">
      <CreatePlatformForm onAddPlatform={onAddPlatform} />
      <CreateGameForm onAddGame={onAddGame} />
    </div>
  );
}

export default App;
