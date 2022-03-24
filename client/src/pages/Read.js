import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ReviewCard from '../components/ReviewCard'
import axios from 'axios'

const Read = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const makeApiCall = async () => {
        let res = await axios.get('http://localhost:3001/reviews')
        setReviews(res.data.reviews)
        }   
        makeApiCall()
    }, [])
    

    return (
        <div>
            <Header />
            <section>
                <h1>Recent reviews</h1>
                {reviews.map((review) => (
                    <ReviewCard
                        key={review._id}
                        username={review.username}
                        desc={review.description}
                        {...review}
                    />
                ))}
            </section>
        </div>
    )
}

export default Read