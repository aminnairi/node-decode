# node-decode

Check that your data meet your expectations.

[![Test](https://github.com/aminnairi/node-decode/actions/workflows/test.yaml/badge.svg?branch=latest)](https://github.com/aminnairi/node-decode/actions/workflows/test.yaml)

## Requirements

- Node

## Installation

```console
$ npm install @aminnairi/decode
```

## Usage

### Simple

```console
$ touch index.mjs
```

```javascript
import {decode} from "@aminnairi/decode";

const schema    = "string";
const goodData  = "Hello world";
const badData   = 123;

console.log(decode(schema, goodData));
console.log(decode(schema, badData));
```

```console
$ node index.mjs
true
false
```

### Array

```console
$ touch index.mjs
```

```javascript
import {decode} from "@aminnairi/decode";

const schema    = ["string"];
const goodData  = ["Hello", "world"];
const badData   = ["Hello", 123];

console.log(decode(schema, goodData));
console.log(decode(schema, badData));
```

```console
$ node index.mjs
true
false
```

### Object

```console
$ touch index.mjs
```

```javascript
import {decode} from "@aminnairi/decode";

const schema    = {user: "string", age: "number"};
const goodData  = {user: "john", age: 42};
const badData   = {user: "jane", age: "24"};

console.log(decode(schema, goodData));
console.log(decode(schema, badData));
```

```console
$ node index.mjs
true
false
```

### Object (loose)

```console
$ touch index.mjs
```

```javascript
import {decode} from "@aminnairi/decode";

const schema    = {user: "string", age: "number"};
const goodData  = {user: "john", age: 42, isAdmin: false};
const badData   = {user: "jane", age: "24", isAdmin: false};

console.log(decode(schema, goodData));
console.log(decode(schema, badData));
```

```console
$ node index.mjs
true
false
```

### Array of objects

```console
$ touch index.mjs
```

```javascript
import {decode} from "@aminnairi/decode";

const schema    = [{user: "string", age: "number"}];
const goodData  = [{user: "john", age: 42}, {user: "jane", age: 24}];
const badData   = [{user: "john", age: "42"}, {user: "jane", age: 24}];

console.log(decode(schema, goodData));
console.log(decode(schema, badData));
```

```console
$ node index.mjs
true
false
```

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).
