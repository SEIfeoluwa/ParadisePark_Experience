const { model } = require('mongoose')
const UserSchema = require('./user')
const ReviewSchema = require('./review')

const User = model('users', UserSchema)
const Review = model('review', ReviewSchema)

module.exports = {
  User,
  Review
}