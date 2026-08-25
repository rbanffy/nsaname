const tap = require('tap')
const nsaname = require('../src/nsaname.js')

const { first, second, suffixes } = nsaname.wordLists

// --- wordLists shape ---

tap.ok(Array.isArray(first), 'wordLists.first is an array')
tap.ok(Array.isArray(second), 'wordLists.second is an array')
tap.ok(Array.isArray(suffixes), 'wordLists.suffixes is an array')
tap.ok(first.length > 0, 'wordLists.first is non-empty')
tap.ok(second.length > 0, 'wordLists.second is non-empty')
tap.ok(suffixes.length > 0, 'wordLists.suffixes is non-empty')

// --- no duplicates ---

tap.equal(first.length, new Set(first).size, 'wordLists.first has no duplicates')
tap.equal(second.length, new Set(second).size, 'wordLists.second has no duplicates')
tap.equal(suffixes.length, new Set(suffixes).size, 'wordLists.suffixes has no duplicates')

// --- word format: start with uppercase letter, letters only ---

const wordPattern = /^[A-Z][A-Za-z]*$/
first.forEach(function (w) {
  tap.match(w, wordPattern, 'first word "' + w + '" starts uppercase and is letters-only')
})
second.forEach(function (w) {
  tap.match(w, wordPattern, 'second word "' + w + '" starts uppercase and is letters-only')
})

// --- alphabetical order ---

const sortedFirst = [...first].sort((a, b) => a.localeCompare(b))
tap.same(first, sortedFirst, 'wordLists.first is sorted alphabetically')

const sortedSecond = [...second].sort((a, b) => a.localeCompare(b))
tap.same(second, sortedSecond, 'wordLists.second is sorted alphabetically')

// --- getNSAName return type ---

tap.type(nsaname.getNSAName(), 'string', 'getNSAName() returns a string')
tap.type(nsaname.getNSAName(true), 'string', 'getNSAName(true) returns a string')
tap.type(nsaname.getNSAName(false, '-'), 'string', 'getNSAName(false, "-") returns a string')

// --- suffix behaviour ---

const withSuffix = nsaname.getNSAName(true, ' ')
tap.ok(
  suffixes.some(function (s) { return withSuffix.endsWith(' ' + s) }),
  'getNSAName(true, " ") ends with a known suffix'
)

const withoutSuffix = nsaname.getNSAName(null, ' ')
tap.notOk(
  suffixes.some(function (s) { return withoutSuffix.endsWith(' ' + s) }),
  'getNSAName(null, " ") does not end with a suffix'
)

// --- separator behaviour ---

const spaced = nsaname.getNSAName(null, ' ')
const parts = spaced.split(' ')
tap.equal(parts.length, 2, 'getNSAName(null, " ") produces exactly two space-separated words')
tap.ok(
  first.includes(parts[0]),
  'first part of spaced name is in wordLists.first'
)
tap.ok(
  second.includes(parts[1]),
  'second part of spaced name is in wordLists.second'
)

const hyphenated = nsaname.getNSAName(null, '-')
tap.match(hyphenated, /^[A-Za-z]+-[A-Za-z]+$/, 'getNSAName(null, "-") is hostname-safe')
