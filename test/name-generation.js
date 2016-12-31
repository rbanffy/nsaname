const tap = require('tap')
const nsaname = require('../lib/nsaname.js')

var name = nsaname.getNSAName()

// Test default behavior.
tap.true(nsaname.wordLists.first.some(
  function (n) { return name.indexOf(n) > -1 }))
tap.true(nsaname.wordLists.second.some(
  function (n) { return name.indexOf(n) > -1 }))

//  Test with suffixes
name = nsaname.getNSAName(true)
tap.true(nsaname.wordLists.suffixes.some(
  function (n) { return name.indexOf(n) > -1 }))

// Test separator
name = nsaname.getNSAName(false, '-')
tap.true(name.indexOf('-') > -1)
