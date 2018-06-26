const { Client } = require('pg')
const helpers = require('./helpers.js');

const specs = {
  database: 'simonstroh',
  user: 'simonstroh',
  host: 'localhost'
};

const client = new Client(specs);
client.connect();

const getReviews = function (productId, callback) {
  const query = `
      SELECT
      *,
      users.id AS userId,
      users.active_since AS memberSince,
      users.athletic_type AS athleticType,
      users.body_type AS bodyType,
      reviews.id AS reviewId,
      reviews.created_at AS createdAt,
      reviews.what_you_like AS whatYouLike,
      reviews.what_you_didnt_like AS whatYouDidntLike,
      reviews.voted_helpful AS votedHelpful,
      reviews.voted_not_helpful AS votedNotHelpful
    FROM reviews
    LEFT JOIN users ON reviews.user_id=users.id
    WHERE reviews.product_id=?;
    `;

  client.query(query, [productId], (err, result) => {
    if (err) { throw err; }
    // conn.end();
    callback(result);
  });
};

const updateReview = function (reviewId, field, value, callback) {
  const snakedField = helpers.camelToSnake(field);
  console.log(reviewId, snakedField, value);
  const query = `UPDATE reviews SET ${snakedField}=? WHERE id=?;`;
  client.query(query, [value, reviewId], (err) => {
    if (err) {
      // conn.end();
      throw err;
    }
    // conn.end();
    callback();
  });
};

module.exports = {
  getReviews,
  updateReview,
};
