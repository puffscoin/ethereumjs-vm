const Block = require('puffscoinjs-block')
const Account = require('puffscoinjs-account')
const level = require('level-mem')
const Blockchain = require('puffscoinjs-blockchain')
const VM = require('../../lib/index')

function createGenesis (opts = {}) {
  opts.chain = opts.chain ? opts.chain : 'mainnet'
  const genesis = new Block(null, opts)
  genesis.setGenesisParams()

  return genesis
}

function createAccount (nonce, balance) {
  const raw = {
    nonce: nonce || '0x00',
    balance: balance || '0xfff384'
  }
  const acc = new Account(raw)
  return acc
}

function setupVM (opts = {}) {
  const db = level()
  opts.blockchain = opts.blockchain ? opts.blockchain : new Blockchain({ db, validate: false })
  const vm = new VM(opts)

  return vm
}

module.exports = {
  createGenesis,
  createAccount,
  setupVM
}
