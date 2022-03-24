const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const createUser = async () => {
    const user = [{
        username: "joe4500"
    }]

    await User.create(user)
    console.log('Created User!')
    return user
}

const run = async () => {
    await createUser();
    db.close();
}

run()