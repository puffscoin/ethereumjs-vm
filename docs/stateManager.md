<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [StateManager][1]
    -   [getAccount][2]
        -   [Parameters][3]
    -   [putAccount][4]
        -   [Parameters][5]
    -   [putContractCode][6]
        -   [Parameters][7]
    -   [getContractCode][8]
        -   [Parameters][9]
    -   [getContractStorage][10]
        -   [Parameters][11]
    -   [putContractStorage][12]
        -   [Parameters][13]
    -   [clearContractStorage][14]
        -   [Parameters][15]
    -   [checkpoint][16]
        -   [Parameters][17]
    -   [commit][18]
        -   [Parameters][19]
    -   [revert][20]
        -   [Parameters][21]
    -   [getStateRoot][22]
        -   [Parameters][23]
    -   [setStateRoot][24]
        -   [Parameters][25]
    -   [generateCanonicalGenesis][26]
        -   [Parameters][27]
    -   [accountIsEmpty][28]
        -   [Parameters][29]
    -   [cleanupTouchedAccounts][30]
        -   [Parameters][31]
-   [DefaultStateManager][32]
    -   [Parameters][33]
    -   [copy][34]
    -   [dumpStorage][35]
        -   [Parameters][36]
    -   [hasGenesisState][37]
        -   [Parameters][38]
    -   [generateGenesis][39]
        -   [Parameters][40]
-   [getAccount~callback][41]
    -   [Parameters][42]
-   [getContractCode~callback][43]
    -   [Parameters][44]
-   [getContractStorage~callback][45]
    -   [Parameters][46]
-   [getStateRoot~callback][47]
    -   [Parameters][48]
-   [dumpStorage~callback][49]
    -   [Parameters][50]
-   [hasGenesisState~callback][51]
    -   [Parameters][52]
-   [accountIsEmpty~callback][53]
    -   [Parameters][54]

## StateManager

Interface for getting and setting data from an underlying
state trie

### getAccount

Gets the [`puffscoinjs-account`][55]
associated with `address`. Returns an empty account if the account does not exist.

#### Parameters

-   `address` **[Buffer][56]** Address of the `account` to get
-   `cb` **[getAccount~callback][57]** 

### putAccount

Saves an [`puffscoinjs-account`][55]
into state under the provided `address`

#### Parameters

-   `address` **[Buffer][56]** Address under which to store `account`
-   `account` **Account** The [`puffscoinjs-account`][55] to store
-   `cb` **[Function][58]** Callback function

### putContractCode

Adds `value` to the state trie as code, and sets `codeHash` on the account
corresponding to `address` to reference this.

#### Parameters

-   `address` **[Buffer][56]** Address of the `account` to add the `code` for
-   `value` **[Buffer][56]** The value of the `code`
-   `cb` **[Function][58]** Callback function

### getContractCode

Gets the code corresponding to the provided `address`

#### Parameters

-   `address` **[Buffer][56]** Address to get the `code` for
-   `cb` **[getContractCode~callback][59]** 

### getContractStorage

Gets the storage value associated with the provided `address` and `key`

#### Parameters

-   `address` **[Buffer][56]** Address of the account to get the storage for
-   `key` **[Buffer][56]** Key in the account's storage to get the value for
-   `cb` **[getContractCode~callback][59]** 

### putContractStorage

Adds value to the state trie for the `account`
corresponding to `address` at the provided `key`

#### Parameters

-   `address` **[Buffer][56]** Address to set a storage value for
-   `key` **[Buffer][56]** Key to set the value at
-   `value` **[Buffer][56]** Value to set at `key` for account corresponding to `address`
-   `cb` **[Function][58]** Callback function

### clearContractStorage

Clears all storage entries for the account corresponding to `address`

#### Parameters

-   `address` **[Buffer][56]** Address to clear the storage of
-   `cb` **[Function][58]** Callback function

### checkpoint

Checkpoints the current state of the StateManager instance.
State changes that follow can then be committed by calling
`commit` or `reverted` by calling rollback.

#### Parameters

-   `cb` **[Function][58]** Callback function

### commit

Commits the current change-set to the instance since the
last call to checkpoint.

#### Parameters

-   `cb` **[Function][58]** Callback function

### revert

Reverts the current change-set to the instance since the
last call to checkpoint.

#### Parameters

-   `cb` **[Function][58]** Callback function

### getStateRoot

Gets the state-root of the Merkle-Patricia trie representation
of the state of this StateManager. Will error if there are uncommitted
checkpoints on the instance.

#### Parameters

-   `cb` **[getStateRoot~callback][60]** 

### setStateRoot

Sets the state of the instance to that represented
by the provided `stateRoot`. Will error if there are uncommitted
checkpoints on the instance or if the state root does not exist in
the state trie.

#### Parameters

-   `stateRoot` **[Buffer][56]** The state-root to reset the instance to
-   `cb` **[Function][58]** Callback function

### generateCanonicalGenesis

Generates a canonical genesis state on the instance based on the
configured chain parameters. Will error if there are uncommitted
checkpoints on the instance.

#### Parameters

-   `cb` **[Function][58]** Callback function

### accountIsEmpty

Checks if the `account` corresponding to `address` is empty

#### Parameters

-   `address` **[Buffer][56]** Address to check
-   `cb` **[accountIsEmpty~callback][62]** 

### cleanupTouchedAccounts

Removes accounts form the state trie that have been touched.

#### Parameters

-   `cb` **[Function][58]** Callback function

## DefaultStateManager

Default implementation of the `StateManager` interface

### Parameters

-   `opts` **[Object][63]**  (optional, default `{}`)
    -   `opts.common` **Common?** [`Common`][64] parameters of the chain
    -   `opts.trie` **Trie?** a [`merkle-patricia-tree`][65] instance

### copy

Copies the current instance of the `DefaultStateManager`
at the last fully committed point, i.e. as if all current
checkpoints were reverted

### dumpStorage

Dumps the the storage values for an `account` specified by `address`

#### Parameters

-   `address` **[Buffer][56]** The address of the `account` to return storage for
-   `cb` **[dumpStorage~callback][66]** 

### hasGenesisState

Checks whether the current instance has the canonical genesis state
for the configured chain parameters.

#### Parameters

-   `cb` **[hasGenesisState~callback][67]** 

### generateGenesis

Initializes the provided genesis state into the state trie

#### Parameters

-   `initState` **[Object][63]** 
-   `cb` **[Function][58]** Callback function

## getAccount~callback

Callback for `getAccount` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`
-   `account` **Account** An [`puffscoinjs-account`][55]
    instance corresponding to the provided `address`

## getContractCode~callback

Callback for `getContractCode` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`
-   `code` **[Buffer][56]** The code corresponding to the provided address.
    Returns an empty `Buffer` if the account has no associated code.

## getContractStorage~callback

Callback for `getContractStorage` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`
-   `storageValue` **[Buffer][56]** The storage value for the account
    corresponding to the provided address at the provided key.
    If this does not exists an empty `Buffer` is returned

## getStateRoot~callback

Callback for `getStateRoot` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`.
    Will be an error if the un-committed checkpoints on the instance.
-   `stateRoot` **[Buffer][56]** The state-root of the `StateManager`

## dumpStorage~callback

Callback for `dumpStorage` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`
-   `accountState` **[Object][63]** The state of the account as an `Object` map.
    Keys are are the storage keys, values are the storage values as strings.
    Both are represented as hex strings without the `0x` prefix.

## hasGenesisState~callback

Callback for `hasGenesisState` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`
-   `hasGenesisState` **[Boolean][69]** Whether the storage trie contains the
    canonical genesis state for the configured chain parameters.

## accountIsEmpty~callback

Callback for `accountIsEmpty` method

Type: [Function][58]

### Parameters

-   `error` **[Error][68]** an error that may have happened or `null`
-   `empty` **[Boolean][69]** True if the account is empty false otherwise

[1]: #statemanager

[2]: #getaccount

[3]: #parameters

[4]: #putaccount

[5]: #parameters-1

[6]: #putcontractcode

[7]: #parameters-2

[8]: #getcontractcode

[9]: #parameters-3

[10]: #getcontractstorage

[11]: #parameters-4

[12]: #putcontractstorage

[13]: #parameters-5

[14]: #clearcontractstorage

[15]: #parameters-6

[16]: #checkpoint

[17]: #parameters-7

[18]: #commit

[19]: #parameters-8

[20]: #revert

[21]: #parameters-9

[22]: #getstateroot

[23]: #parameters-10

[24]: #setstateroot

[25]: #parameters-11

[26]: #generatecanonicalgenesis

[27]: #parameters-12

[28]: #accountisempty

[29]: #parameters-13

[30]: #cleanuptouchedaccounts

[31]: #parameters-14

[32]: #defaultstatemanager

[33]: #parameters-15

[34]: #copy

[35]: #dumpstorage

[36]: #parameters-16

[37]: #hasgenesisstate

[38]: #parameters-17

[39]: #generategenesis

[40]: #parameters-18

[41]: #getaccountcallback

[42]: #parameters-19

[43]: #getcontractcodecallback

[44]: #parameters-20

[45]: #getcontractstoragecallback

[46]: #parameters-21

[47]: #getstaterootcallback

[48]: #parameters-22

[49]: #dumpstoragecallback

[50]: #parameters-23

[51]: #hasgenesisstatecallback

[52]: #parameters-24

[53]: #accountisemptycallback

[54]: #parameters-25

[55]: https://github.com/puffscoin/puffscoinjs-account

[56]: https://nodejs.org/api/buffer.html

[57]: #getaccountcallback

[58]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[59]: #getcontractcodecallback

[60]: #getstaterootcallback

[61]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-161.md

[62]: #accountisemptycallback

[63]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[64]: https://github.com/puffscoin/puffscoinjs-common

[65]: https://github.com/puffscoin/merkle-patricia-tree

[66]: #dumpstoragecallback

[67]: #hasgenesisstatecallback

[68]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[69]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
