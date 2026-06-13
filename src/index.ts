#! /usr/bin/env node
/* eslint no-console: ["error", { allow: ["log", "error"] }] */

import getUsage from 'command-line-usage'
import commandLineArgs from 'command-line-args'
import { getNSAName } from './nsaname'

interface CliOptions {
  help: boolean
  lowercase: boolean
   'no-suffix': boolean
  hostname: boolean
}

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

const cliParseErrorNames = ['UNKNOWN_OPTION', 'UNKNOWN_VALUE']

let options: CliOptions
try {
  options = commandLineArgs(commandLineOptionDefinitions) as CliOptions
} catch (error) {
  if (!(error instanceof Error) || !cliParseErrorNames.includes(error.name)) {
    throw error
  }
  console.error(`Error: ${error.message}\n`)
  console.error(usage)
  process.exit(1)
}

if (options.help) {
  console.log(usage)
} else {
  let name = getNSAName(
    !(options.hostname || options['no-suffix']),
    options.hostname ? '-' : '')
  if (options.hostname) {
    name = name.replace(' ', '-')
  }
  if (options.lowercase || options.hostname) {
    name = name.toLowerCase()
  }
  console.log(name)
}
