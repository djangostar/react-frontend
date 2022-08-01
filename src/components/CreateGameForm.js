import React, { useState } from 'react';

const  CreateGameForm = ({ onAddGame, platforms }) => {
    const [formInfo, setFormData] = useState({
        title:'',
        genre:'',
        review:'',
        year_released:'',
        currently_playing: true,
        platform_id:''
    })

    const handleChange = (e) => {
        setFormData({...formInfo, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddGame(formInfo)
    }
    console.log(platforms)
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <label>
                Title:
                <input name="title" type="text" placeholder="Title" value={formInfo.title} onChange={handleChange} />
                </label>
                <label>
                Genre:
                <input name="genre" type="text" placeholder="Genre" value={formInfo.genre} onChange={handleChange} />
                </label>
                <label>
                Review:
                <textarea name="review" placeholder="Review" value={formInfo.review} onChange={handleChange} />
                </label>
                <label>
                Year Released:
                <input name="year-released" type="number" value={formInfo.year_released} onChange={handleChange} />
                </label>
                <label>
                Platform:
                <select name="platform_id" onChange={handleChange}>
                    <option>Select a Platform</option>
                    {platforms.map(platform => 
                    <option value={platform.id}>{platform.platform_name}</option>)}
                </select>
                </label>
                <input type="submit" value="Create a Game" />
            </form>
        </div>
    )
}

export default CreateGameForm;