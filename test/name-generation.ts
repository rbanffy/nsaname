import tap from 'tap'
import { getNSAName, wordLists } from '../src/nsaname'

// Test default behavior.
let name = getNSAName()
tap.ok(wordLists.first.some(
  function (n: string) { return name.indexOf(n) > -1 }))
tap.ok(wordLists.second.some(
  function (n: string) { return name.indexOf(n) > -1 }))

//  Test with suffixes
name = getNSAName(true)
tap.ok(wordLists.suffixes.some(
  function (n: string) { return name.indexOf(n) > -1 }))

// Test separator
name = getNSAName(false, '-')
tap.ok(name.indexOf('-') > -1)
