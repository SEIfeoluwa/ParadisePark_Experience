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
                <h1 className='rec'>Recent reviews</h1>
                <div className='reviewContainer'>
                {reviews.map((review) => (
                    <ReviewCard
                        key={review._id}
                        username={review.username}
                        desc={review.description}
                        rate={review.rating}
                        {...review}
                    />
                ))}
                </div>
            </section>
        </div>
    )
}

export default Read