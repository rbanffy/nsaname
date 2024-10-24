const tap = require('tap')
const nsaname = require('../lib/nsaname.js')

// Test default behavior.
var name = nsaname.getNSAName()
tap.ok(nsaname.wordLists.first.some(
  function (n) { return name.indexOf(n) > -1 }))
tap.ok(nsaname.wordLists.second.some(
  function (n) { return name.indexOf(n) > -1 }))

//  Test with suffixes
name = nsaname.getNSAName(true)
tap.ok(nsaname.wordLists.suffixes.some(
  function (n) { return name.indexOf(n) > -1 }))

// Test separator
name = nsaname.getNSAName(false, '-')
tap.ok(name.indexOf('-') > -1)
