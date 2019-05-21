# SYNOPSIS

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Implements PUFFScoin's VM in Javascript.

#### Fork Support

The VM currently supports the following hardfork rules:

- `Byzantium`
- `Constantinople`
- `Petersburg` (default)


# INSTALL
`npm install puffscoinjs-vm`

# USAGE
```javascript
var VM = require('puffscoinjs-vm')

//create a new VM instance
var vm = new VM()
var code = '7f4e616d65526567000000000000000000000000000000000000000000000000003055307f4e616d6552656700000000000000000000000000000000000000000000000000557f436f6e666967000000000000000000000000000000000000000000000000000073661005d2720d855f1d9976f88bb10c1a3398c77f5573661005d2720d855f1d9976f88bb10c1a3398c77f7f436f6e6669670000000000000000000000000000000000000000000000000000553360455560df806100c56000396000f3007f726567697374657200000000000000000000000000000000000000000000000060003514156053576020355415603257005b335415603e5760003354555b6020353360006000a233602035556020353355005b60007f756e72656769737465720000000000000000000000000000000000000000000060003514156082575033545b1560995733335460006000a2600033545560003355005b60007f6b696c6c00000000000000000000000000000000000000000000000000000000600035141560cb575060455433145b1560d25733ff5b6000355460005260206000f3'

vm.runCode({
  code: Buffer.from(code, 'hex'), // code needs to be a Buffer
  gasLimit: Buffer.from('ffffffff', 'hex')
}, function(err, results){
  console.log('returned: ' + results.return.toString('hex'));
})
```
Also more examples can be found here
- [examples](./examples)
- [old blog post](https://wanderer.github.io/ethereum/nodejs/code/2014/08/12/running-contracts-with-vm/)

# BROWSER

To build for standalone use in the browser, install `browserify` and check [run-transactions-simple example](https://github.com/puffscoin/puffscoinjs-vm/tree/master/examples/run-transactions-simple). This will give you a global variable `PuffsVM` to use. The generated file will be at `./examples/run-transactions-simple/build.js`.

# API

## VM

For documentation on ``VM`` instantiation, exposed API and emitted ``events`` see generated [API docs](./docs/index.md).

## StateManger

The API for the ``StateManager`` is currently in ``Beta``, separate documentation can be found [here](./docs/stateManager.md), see also [release notes](https://github.com/puffscoin/puffscoinjs-vm/releases/tag/v2.5.0) from the ``v2.5.0`` VM release for details on the ``StateManager`` rewrite.

# Internal Structure
The VM processes state changes at many levels.

* **runBlockchain**
  * for every block, runBlock
* **runBlock**
  * for every tx, runTx
  * pay miner and uncles
* **runTx**
  * check sender balance
  * check sender nonce
  * runCall
  * transfer gas charges
* **runCall**
  * checkpoint state
  * transfer value
  * load code
  * runCode
  * materialize created contracts
  * revert or commit checkpoint
* **runCode**
  * iterate over code
  * run op codes
  * track gas usage
* **OpFns**
  * run individual op code
  * modify stack
  * modify memory
  * calculate fee

The opFns for `CREATE`, `CALL`, and `CALLCODE` call back up to `runCall`.


# DEVELOPMENT

Developer documentation - currently mainly with information on testing and debugging - can be found [here](./docs/developer.md). 

# EthereumJS

See our organizational [documentation](https://ethereumjs.readthedocs.io) for an introduction to `EthereumJS` as well as information on current standards and best practices.

If you want to join for work or do improvements on the libraries have a look at our [contribution guidelines](https://ethereumjs.readthedocs.io/en/latest/contributing.html).

# LICENSE
[MPL-2.0](https://www.mozilla.org/MPL/2.0/)
