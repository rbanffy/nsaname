// Names derived from https://en.wikipedia.org/wiki/NSA_ANT_catalog

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

const suffixes = [
  'HX', 'I', 'II', 'III', '2000', '4000', '9000', 'Hx9', '2.0', '3.0'
]

/**
 * Returns a nice name for a secret project or tool.
 *
 * @return {string}
 */
function getNSAName (suffix, separator) {
  var nsaname = first[Math.floor(Math.random() * first.length)] +
      separator + second[Math.floor(Math.random() * second.length)]

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
