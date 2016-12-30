const first = [
  'Candy',
  'Cotton',
  'Cross',
  'Deity',
  'Dropout',
  'Feed',
  'Fire',
  'Gopher',
  'Gourmet',
  'Halux',
  'Head',
  'Howler',
  'Irate',
  'Iron',
  'Jet',
  'Junior',
  'Loud',
  'Maestro',
  'Monkey',
  'Night',
  'Photo',
  'Rage',
  'School',
  'Sierra',
  'Somber',
  'Souffle',
  'Stucco',
  'Surly',
  'Swap',
  'Tawdry',
  'Tote',
  'Trinity',
  'Water',
  'Wistful'
]

const second = [
  ' CTX',
  ' EBSR',
  'Anglo',
  'Auto',
  'Beam',
  'Bounce',
  'Calendar',
  'Chef',
  'Cyclone',
  'Entourage',
  'Genesis',
  'Ghostly',
  'Ginsu',
  'Gram',
  'Jeep',
  'Knave',
  'Maestro',
  'Master',
  'Mint',
  'Monk',
  'Monkey',
  'Montana',
  'Mouth',
  'Nebula',
  'Picasso',
  'Plow',
  'Set',
  'Sparrow',
  'Spawn',
  'Stand',
  'Swap',
  'Thorugh',
  'Toll',
  'Trinity',
  'Typhon',
  'Walk',
  'Watch',
  'Water',
  'Witch',
  'Yard'
]

const suffixes = ['HX', 'I', 'II', 'III', '4000', 'Hx9', '2.0']

/**
 * Returns a nice name for a secret project or tool.
 *
 * @return {string}
 */
const getNSAName = function (suffix=false) {
  var nsaname = first[Math.floor(Math.random() * first.length)] +
      second[Math.floor(Math.random() * second.length)]

  if (suffix) {
    nsaname += ' ' +
            suffixes[Math.floor(Math.random() * suffixes.length)]
  }
  return nsaname
}

module.exports = {
  getNSAName: getNSAName,
  wordLists: {
    first: first,
    second: second,
    suffixes: suffixes
  }
}
