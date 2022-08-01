
const Display = ({game, handleChange}) => {
    console.log(game)
    return (
        
        <div className="container">
            <h3>Title: {game.title}</h3>
            <p>Genre: {game.genre}</p>
            <p>Review: {game.review}</p>
            <p>Year Released: {game.year_released}</p>
            <p>Currently Playing: {game.currently_playing ? <button onClick={() => handleChange(game)}>Not Playing</button> :<p>No longer playing the game</p>}</p>
            <p>Platform: {game.platform.platform_name}</p>       
        </div>
    )
}

export default Display