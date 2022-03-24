import axios from 'axios'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState(0)

    const handleChange = (event) => {
        const target = event.target.value;
        setName(target);
        console.log(target)
    }

    const handleChange2 = (event) => {
        const target = event.target.value;
        setDesc(target);
    }

    const handleChange3 = (event) => {
        const target = event.target.value;
        setRating(target)
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios({
            url: "http://localhost:3001/createReviews",
            method: 'post',
            data: {
                username: name,
                description: desc,
                rating: rating
            }
        })
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                Name: <input type="text" name="Name" onChange={handleChange} />
                Description: <input type="text" name="Description" onChange={handleChange2} />
                Rating: <input type="number" name="Rating" onChange={handleChange3} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form