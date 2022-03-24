import axios from 'axios'
import {  useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        const input = async() => {
            let res = await axios.create("http://localhost:3001/createReviews")
        }
    }

    return(
        <div>
            <form >
                Name: <input type="text"  name="Name" />
                Description: <input type="text" name="Description" />
                Rating: <input type="number" name="Rating" />
                <button onSubmit = { handleSubmit }>Submit</button>
            </form>
        </div>
    )
}

export default Form