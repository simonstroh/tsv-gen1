const fs = require('fs')

const nicknames = ['Sam', 'Simon', 'Nat', 'Grant']
const activeSinces = ['2011-12-25 19:00:59', '2010-02-08 11:30:48', '2015-02-05 23:33:02', '2011-12-17 15:03:46']
const ages = ['47', '35', '32', '33', '36', '22', '23', '21']
const bodyTypes = ['curvy', 'slim', 'petite', 'lean', 'athletic']
const athleticTypes = ['yogi', 'runner', 'cyclist', 'sweaty']
const cities = ['Brooklyn', 'Paris', 'Tokyo', 'Berlin']
const states = ['New York']
const countries = ['United States', 'France']

function randomValuesInArrays() {
  const arrays = Array.from(arguments);
  function randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const items = arrays.map(array => randomValue(array));
  return items;
}
let start = 1;
let end = 10001;
function tenThousandOf(start, end) {
  const result = [];
  if (start === 1) result.push('_id\tnickname\tactiveSince\tage\tbodyType\tathleticType\tcity\tstate\tcountry\n')
  for (var i = start; i < end; i++) {
    const data = [];
    data.push(...randomValuesInArrays(nicknames, activeSinces, ages, bodyTypes, athleticTypes, cities, states, countries));
    result.push([i, ...data].join('\t') + '\n');
  }
  return result.join('');
}

while (start < 10000001) {
  fs.appendFileSync('users.tsv', tenThousandOf(start, end))
  start += 10000
  end += 10000
}
