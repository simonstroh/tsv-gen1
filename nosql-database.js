const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/lululemon-reviews')
const Schema = mongoose.Schema

const productReviewSchema = new Schema({
  id: Number,
  createdAt: String,
  title: String,
  details: String,
  fit: String,
  rating: Number,
  whatYouLike: String,
  whatYouDidntLike: String,
  votedHelpful: Number,
  votedNotHelpful: Number,
  inappropriate: Number,
  userId: Number,
  productId: Number,
  nickname: String,
  activeSince: String,
  age: Number,
  bodyType: String,
  athleticType: String,
  city: String,
  state: String,
  country: String
})

const productReview = mongoose.model('productReview', productReviewSchema)

module.exports = productReview
