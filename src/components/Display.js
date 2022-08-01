
const Display = ({game}) => {
    return (
        <div>
            <h3>Title: {game.title}</h3>
            <p>Genre: {game.genre}</p>
            <p>Review: {game.review}</p>
            <p>Year Released: {game.year_released}</p>
            <p>Currently Playing: {game.currently_playing}</p>       
        </div>
    )
}

export default Display