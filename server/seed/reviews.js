const db = require('../db')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createReviews = async () => {
    const reviews = [{
        username: "joe4500",
        description: "This place was amazing.",
        rating: 5
    }]

    await Review.insertMany(reviews)
    console.log('Created Reviews!')
    return reviews
}

const run = async () => {
    await createReviews()
    db.close()
}

run()

