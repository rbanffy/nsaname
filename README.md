# nsaname

[![view on npm](http://img.shields.io/npm/v/nsaname.svg)](https://www.npmjs.org/package/nsaname)
[![npm module downloads](http://img.shields.io/npm/dt/nsaname.svg)](https://www.npmjs.org/package/nsaname)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Join the chat at https://gitter.im/nsaname/Lobby](https://badges.gitter.im/nsaname/Lobby.svg)](https://gitter.im/nsaname/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Like petname, but for naming secret projects and tools.

## Installing

```shell
npm install nsaname
```

## Usage

```text
$ nsaname --help

NSA Name

  Like petname, but for naming secret projects and tools.

Options

  --help         Print this usage guide.
  --lowercase    Output in lowercase.
  --no-suffix    Don't add a suffix.
  --hostname     Output a sensible hostname.

$ nsaname
SchoolSwap HX
$ nsaname
WistfulMonkey 4000
$ nsaname -l
headset iii
$ nsaname -n
SchoolJeep
$ nsaname -h
swap-gram
$ nsaname -h
cotton-witch
```

## Using nsaname as a library

`nsaname` can be used as a library in your own Node.js programs:

```javascript
const { getNSAName, wordLists } = require('nsaname')

// Generate a name with a random suffix and no separator
console.log(getNSAName())
// e.g. "GhostMachine 4000"

// Append a random suffix, with a custom separator between the words
console.log(getNSAName(true, ' '))
// e.g. "Iron Chef II"

// Omit the suffix entirely
console.log(getNSAName(null, ' '))
// e.g. "Dark Thunder"

// Lowercase hostname-style name
console.log(getNSAName(null, '-').toLowerCase())
// e.g. "golden-retriever"

// Access the raw word lists directly
console.log(wordLists.first)   // array of first words
console.log(wordLists.second)  // array of second words
console.log(wordLists.suffixes) // array of suffixes
```

### API

#### `getNSAName(suffix, separator)`

Returns a randomly generated NSA-style name string.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `suffix` | boolean | `false` | When truthy, appends a random suffix (e.g. `'II'`, `'9000'`). When falsy, no suffix is added. |
| `separator` | string | `''` | String placed between the two name words. Use `' '` for a space or `'-'` for a hostname-safe name. |

#### `wordLists`

An object exposing the three source arrays used to build names:

- `wordLists.first` — first-word components
- `wordLists.second` — second-word components
- `wordLists.suffixes` — version/suffix tokens

## Developing

Check out the current develop branch and run `npm install`. The source is
written in TypeScript. To run the CLI directly from the TypeScript sources using the `npx` tool:

```shell
npx tsx src/index.ts --help
```

To produce the compiled output that gets published (in `dist/`):

```shell
npm run build
```

For running unit tests (which also builds the project):

```shell
npm run test
```

## Sources

The word lists used to generate names are derived from:

- [NSA ANT catalog](https://en.wikipedia.org/wiki/NSA_ANT_catalog) — a classified catalog of tools and techniques used by the NSA's Tailored Access Operations (TAO) division
- [NSA Codenames, Covernames, and Suggested Use/Implementation](https://christopher-parsons.com/resources/the-sigint-summaries/nsa-codenames-covernames-and-suggested-use-implementation/) — a compilation of NSA codenames and covernames from the Snowden documents
- [NSA Nicknames and Codewords](https://www.electrospaces.net/p/nicknames-and-codewords.html) — a comprehensive listing of ~1400 NSA SIGINT and COMSEC nicknames and codewords

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=rbanffy/nsaname&type=Date)](https://star-history.com/#rbanffy/nsaname&Date)
