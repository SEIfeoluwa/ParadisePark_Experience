const db = require('../db')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createReviews = async () => {
    const reviews = [{
        username: "joe4500",
        description: "This place was amazing.",
        rating: 5
    },
    {
        username: "Ryan",
        description: "This place sucks!",
        rating: 1
    },
    {
        username: "Ife",
        description: "The funnel cakes were awesome.",
        rating: 5
    },
    {
        username: "Ethan",
        description: "The food was the best.",
        rating: 5
    },
    {
        username: "Darthvader123",
        description: "Too expensive!",
        rating: 3
    },
    {
        username: "Apex",
        description: "Roller coasters were mid.",
        rating: 3
    },
    {
        username: "joe4545",
        description: "It was aight, these other reviews lying.",
        rating: 4
    },
    {
        username: "max1000",
        description: "Too many kids.",
        rating: 4
    },
    {
        username: "Daye69",
        description: "Not surre what all the D-Day references are about.",
        rating: 5
    },
    {
        username: "Ben Manning",
        description: "Not enough dogs.",
        rating: 2
    }
]
    

    await Review.insertMany(reviews)
    console.log('Created Reviews!')
    return reviews
}

const run = async () => {
    await createReviews()
    db.close()
}

run()

