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

## Developing

Check out the current develop branch and run `npm install`. To run the program:

```text
$ node index.js --help
Debugger attached.

NSA Name

  Like petname, but for naming secret projects and tools.

Options

  --help string            Print this usage guide.
  -l, --lowercase string   Output in lowercase.
  -n, --no-suffix string   Don't add a suffix.
  -h, --hostname string    Output a sensible hostname.

Waiting for the debugger to disconnect...
```

For running unit tests, you can:

```shell
npm run test
```
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=rbanffy/nsaname&type=Date)](https://star-history.com/#rbanffy/nsaname&Date)

