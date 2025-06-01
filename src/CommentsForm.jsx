import { useState } from 'react';
export default function CommentsForm() {
    let[formData, setFormData] = useState({
        username: '',   
        comment: '',
        rating: 5
    });
    let handleInputChange = (event) => {
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value};
        })   
    };
    

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log('Comment submitted:', formData);
        setFormData({
            username: '',
            comment: '',
            rating: 5
        });
    };

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input placeholder="username" type="text" id="username" name='username' value={formData.username} 
                onChange={handleInputChange}/>
                <br>
                </br>
                <label htmlFor="comment">Comment:</label>
                <textarea placeholder="comment" rows="5" cols="30" id="comment" name="comment"value={formData.comment} onChange={handleInputChange}></textarea>
                <br>
                </br>
                <label htmlFor="rating">Rating:</label>
                <input placeholder="rating" type="number" min="1" max="5" id='rating' name="rating" value={formData.rating} onChange={handleInputChange}/>
                <br>
                </br>
                <button type="submit">Add comment</button>
            </form>
        </div>
    )
}