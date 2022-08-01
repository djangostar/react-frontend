import React, { useState } from 'react';
const Display = ({game, handleChange}) => {
    const [playStatus, setPlayStatus] = useState(true)
    console.log(game)
    return (
        
        <div className="container">
            <h3>Title: {game.title}</h3>
            <p>Genre: {game.genre}</p>
            <p>Review: {game.review}</p>
            <p>Year Released: {game.year_released}</p>
            <p>Platform: {game.platform.platform_name}</p>   
            {game.currently_playing ? <button onClick={() => handleChange(game)}>Not Playing</button> : <p>Not currently playing</p>}
            {game.currently_playing ? <button onClick={() => handleChange(game)}>Playing</button> : <p>Currently Playing</p>}
        </div>
    )
}

export default Display