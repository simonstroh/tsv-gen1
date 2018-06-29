const fs = require('fs')

const createdAts = ['2011-12-25 19:00:59', '2010-02-08 11:30:48', '2015-02-05 23:33:02', '2011-12-17 15:03:46', '2012-09-03 1:57:22']
const titles = ['nibh fusce lacus purus aliquet at feugiat non pretium', 'libero rutrum ac lobortis vel dapibus at diam nam', 'nulla neque libero convallis', 'amet eleifend pede libero quis orci']
const details = ['Friendship contrasted solicitude insipidity in introduced literature it. He seemed denote except as oppose do spring my. Between any may mention evening age shortly can ability regular. He shortly sixteen of colonel colonel evening cordial to. Although jointure an my of mistress servants am weddings. Age why the therefore education unfeeling for arranging. Above again money own scale maids ham least led. Returned settling produced strongly ecstatic use yourself way. Repulsive extremity enjoyment she perceived nor.', 'Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will up able in both do sing.', 'Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young.', 'Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are. ']
const fits = ['varius ut']
const ratings = ['1', '2', '3', '4', '5']
const whatYouLikes = ['vestibulum quam', 'donec', 'placerat praesent blandit nam']
const whatYouDidntLikes = ['vestibulum quam', 'donec', 'placerat praesent blandit nam']
const votedHelpfuls = ['1', '2', '3', '4', '5']
const votedNotHelpfuls = ['1', '2', '3', '4', '5']
const inappropriates = ['1', '2', '3', '4', '5']
const userIds = [...Array(10000001).keys()].slice(1)
const productIds = [...Array(1000001).keys()].slice(1)
const nicknames = ['Sam', 'Simon', 'Nat', 'Grant']
const activeSinces = ['2011-12-25 19:00:59', '2010-02-08 11:30:48', '2015-02-05 23:33:02', '2011-12-17 15:03:46']
const ages = ['47', '35', '32', '33', '36', '22', '23', '21']
const bodyTypes = ['curvy', 'slim', 'petite', 'lean', 'athletic']
const athleticTypes = ['yogi', 'runner', 'cyclist', 'sweaty']
const cities = ['Brooklyn', 'Paris', 'Tokyo', 'Berlin']
const states = ['New York']
const countries = ['United States', 'France']

function randomValuesInArrays() {
  const arrays = Array.from(arguments)
  function randomValue(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  const items = arrays.map(array => randomValue(array))
  return items
}
let start = 1
let end = 100001
function hundredThousandOf(start, end) {
  const result = []
  for (var i = start; i < end; i++) {
    const data = [i]
    let review = {
      id: '',
      createdAt: '',
      title: '',
      details: '',
      fit: '',
      rating: '',
      whatYouLike: '',
      whatYouDidntLike: '',
      votedHelpful: '',
      votedNotHelpful: '',
      inappropriate: '',
      userId: '',
      productId: '',
      nickname: '',
      activeSince: '',
      age: '',
      bodyType: '',
      athleticType: '',
      city: '',
      state: '',
      country: ''
    }
    data.push(...randomValuesInArrays(createdAts, titles, details, fits, ratings, whatYouLikes, whatYouDidntLikes, votedHelpfuls, votedNotHelpfuls, inappropriates, userIds, productIds, nicknames, activeSinces, ages, bodyTypes, athleticTypes, cities, states, countries))
    const reviewItems = Object.keys(review)
    reviewItems.forEach((value, idx) => {
      review[value] = data[idx]
    })
    result.push('\t' + JSON.stringify(review))
  }
  return result.join(',\n')
}
fs.appendFileSync('reviews.json', '[\n')
// fs.appendFileSync('reviews.tsv', '_id\tcreatedAt\ttitle\tdetails\tfit\trating\twhatYouLike\twhatYouDidntLike\tvotedHelpful\tvotedNotHelpful\tinappropriate\tuserId\tproductId\n')
while (start < 10000001) {
  console.log('Added one hundred thousand')
  fs.appendFileSync('reviews.json', hundredThousandOf(start, end))
  start += 100000
  end += 100000
}
fs.appendFileSync('reviews.json', '\n]')
// while (start < 33330001) {
//   console.log('value of start', start)
//   console.log('Added 10000 rows')
//   fs.appendFileSync('reviews1.tsv', tenThousandOf(start, end))
//   start += 10000
//   end += 10000
// }
// while (start >= 33330001 && start < 66660001) {
//   console.log('Second 33330001')
//   fs.appendFileSync('reviews2.tsv', tenThousandOf(start, end))
//   start += 10000
//   end += 10000
// }
// while (start >= 66660001 && start < 100000001) {
//   fs.appendFileSync('reviews3.tsv', tenThousandOf(start, end))
//   start += 10000
//   end += 10000
// }
