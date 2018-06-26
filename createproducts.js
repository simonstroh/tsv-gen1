const express = require('express')
const csv = require('fast-csv')
const fs = require('fs')

const app = express()
app.use(express.static(__dirname))
const genders = ['Men', 'Women', 'Girls']
const categories = ['Tops', 'Bottoms', 'Swim']
const type = ['Pants', 'Shorts', 'Shirts']
const colors = ['red, tourquoise', 'red, blue, pink', 'teal, aquamarine']

const stream = fs.createWriteStream('products.tsv')
let i = 1
stream.on('drain', () => {
  write()
})
stream.write('id\tgender\tcategory\ttype\tcolors\n')
write()
function randomValueInArray(array) {
  const randomInt = Math.floor(Math.random() * array.length)
  return array[randomInt]
}
function write() {
  const data = []
  data.push(...[randomValueInArray(genders), randomValueInArray(categories), randomValueInArray(type), randomValueInArray(colors)])
  while (i < 10000001) {
    if (!stream.write([i++,...data].join('\t') + '\n')) return;
  }
}

app.listen(8889)
