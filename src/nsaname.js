/* -*- js-indent-level: 2 -*- */

// Names derived from:
// - https://en.wikipedia.org/wiki/NSA_ANT_catalog
// - https://christopher-parsons.com/resources/the-sigint-summaries/nsa-codenames-covernames-and-suggested-use-implementation/

const data = require('./nsaname.json')
const first = data.first
const second = data.second
const suffixes = data.suffixes

/**
 * Returns a nice name for a secret project or tool.
 *
 * @return {string}
 */
function getNSAName (suffix, separator) {
  let nsaname = first[Math.floor(Math.random() * first.length)] +
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
