'use strict'
const tap = require('tap')
const nsaname = require('../lib/nsaname.js')

var name = nsaname.getNSAName()

tap.true(nsaname.wordLists.first.some(function (n) { return name.indexOf(n) > -1 }))
tap.true(nsaname.wordLists.second.some(function (n) { return name.indexOf(n) > -1 }))
