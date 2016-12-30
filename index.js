#! /usr/bin/env node
/* eslint no-console: ["error", { allow: ["log"] }] */

const getUsage = require('command-line-usage')
const commandLineArgs = require('command-line-args')
const nsaname = require('./lib/nsaname.js')

const helpSections = [
  {
    header: 'NSA Name',
    content: 'Like petname, but for naming secret projects and tools.'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'help',
        description: 'Print this usage guide.'
      }
    ]
  }
]

const usage = getUsage(helpSections)

const commandLineOptionDefinitions = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    defaultOption: false
  }
]

const options = commandLineArgs(commandLineOptionDefinitions)

if (options.help) {
  console.log(usage)
} else {
  console.log(nsaname.getNSAName(Math.random() > 0.7))
}
