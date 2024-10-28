#! /usr/bin/env node
/* eslint no-console: ["error", { allow: ["log"] }] */

const getUsage = require('command-line-usage')
const commandLineArgs = require('command-line-args')
const nsaname = require('./nsaname.js')

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
      },
      {
        name: 'lowercase',
        alias: 'l',
        description: 'Output in lowercase.'
      },
      {
        name: 'no-suffix',
        alias: 'n',
        description: "Don't add a suffix."
      },
      {
        name: 'hostname',
        alias: 'h',
        description: 'Output a sensible hostname.'
      }
    ]
  }
]

const usage = getUsage(helpSections)

const commandLineOptionDefinitions = [
  {
    name: 'help',
    type: Boolean,
    defaultValue: false
  },
  {
    name: 'lowercase',
    alias: 'l',
    type: Boolean,
    defaultValue: false
  },
  {
    name: 'no-suffix',
    alias: 'n',
    type: Boolean,
    defaultValue: false
  },
  {
    name: 'hostname',
    alias: 'h',
    type: Boolean,
    defaultValue: false
  }
]

const options = commandLineArgs(commandLineOptionDefinitions)

if (options.help) {
  console.log(usage)
} else {
  let name = nsaname.getNSAName(
    !(options.hostname || options['no-suffix']),
    options.hostname ? '-' : '')
  if (options.hostname) {
    name.replace(' ', '-')
  }
  if (options.lowercase || options.hostname) {
    name = name.toLowerCase()
  }
  console.log(name)
}
