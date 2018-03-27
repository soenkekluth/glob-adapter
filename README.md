# glob-adapter

[![Greenkeeper badge](https://badges.greenkeeper.io/soenkekluth/glob-adapter.svg)](https://greenkeeper.io/)
same interface for different glob implementations


## Usage

```js
const adapter = require('glob-adapter').adapter;

const glob = adapter();
const res = await glob.read('./*.js');
console.log(res); // ['file1.js', 'file2.js']

const syncRes = glob.readSync('./*.js');
console.log(syncRes); // ['file1.js', 'file2.js']


// glob-fs
const globFs = adapter('glob-fs');
const res = await globFs.read('./*.js');
console.log(res); // ['file1.js', 'file2.js']

// fast-glob (default)
const fastGlob = adapter('fast-glob');
const res = await fastGlob.read('./*.js');
console.log(res); // ['file1.js', 'file2.js']
``` 