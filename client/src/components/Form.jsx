import axios from 'axios'
import {  useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState(0)

    const handleChange = () => {
        setName()
        setDesc()
        setRating()
    }

    const handleSubmit = (e) => {
        const input = async() => {
            let res = await axios({
                method: 'post',
                url: "http://localhost:3001/createReviews",
                data: {
                    username: name,
                    description: desc,
                    rating: rating
                }
            })
            input();
        }
    }

    return(
        <div>
            <form >
                Name: <input type="text"  name="Name" onChange={ handleChange }/>
                Description: <input type="text" name="Description" onChange={ handleChange }/>
                Rating: <input type="number" name="Rating" onChange={ handleChange }/>
                <button onSubmit = { handleSubmit }>Submit</button>
            </form>
        </div>
    )
}

export default Form