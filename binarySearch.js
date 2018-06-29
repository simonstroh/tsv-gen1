var request = require('request-promise')

request('http://127.0.0.1:5984/lululemon-reviews/_design/newReviewDoc/_view/review-view?key=1000').then((data) => {
  console.log(data)
  const id = data.userId
  request(`http://127.0.0.1:5984/lululemon-users/${id}`).then((res => console.log(res)))
}
).catch((err) => {
  console.log(err)
}
)

// function match(data, start, end, target = 101) {
//   const middle = Math.floor((start + end) / 2)
//   if (target === data[middle].key) return data[middle]
//   if (target > data[middle].key) return match(data, middle, end, target)
//   if (target < data[middle].key) return match(data, start, middle, target)
// }
