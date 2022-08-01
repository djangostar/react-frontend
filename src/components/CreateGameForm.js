import React, { useState } from 'react';

const  CreateGameForm = ({ onAddGame, platforms }) => {
    const [formInfo, setFormData] = useState({
        title:'',
        genre:'',
        review:'',
        year_released:'',
        currently_playing:'',
        platform_id:''
    })

    const handleChange = (e) => {
        setFormData({...formInfo, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddGame(formInfo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <label>
                Title:
                <input type="text" name="title" value={formInfo.title} onChange={handleChange} />
                </label>
                <label>
                Genre:
                <input type="text" name="genre" value={formInfo.genre} onChange={handleChange} />
                </label>
                <label>
                Review:
                <textarea name="review" value={formInfo.review} onChange={handleChange} />
                </label>
                <label>
                
                </label>
            </form>
        </div>
    )
}

export default CreateGameForm;