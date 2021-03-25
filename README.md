# node-decode

Check that your data meet your expectations.

[![Test](https://github.com/aminnairi/node-decode/actions/workflows/test.yaml/badge.svg?branch=latest)](https://github.com/aminnairi/node-decode/actions/workflows/test.yaml)

## Requirements

- Node

## Usage

### Simple

```console
$ npm install @aminnairi/decode
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
$ npm install @aminnairi/decode
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
$ npm install @aminnairi/decode
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
$ npm install @aminnairi/decode
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
$ npm install @aminnairi/decode
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

## Example

```console
$ npm install node-fetch @aminnairi/decode
$ touch index.mjs
```

```javascript
import fetch from "node-fetch";
import {decode} from "@aminnairi/decode";

const usersSchema = [{
  id: "number",
  name: "string",
  username: "string",
  email: "string",
  address: {
    street: "string",
    suite: "string",
    city: "string",
    zipcode: "string",
    geo: {
      lat: "string",
      lng: "string"
    }
  },
  phone: "string",
  website: "string",
  company: {
    name: "string",
    catchPhrase: "string",
    bs: "string"
  }
}];

fetch("https://jsonplaceholder.typicode.com/users/").then(response => {
  return response.json();
}).then(users => {
  if (!decode(usersSchema, users)) {
    throw new Error("Bad response from the server (has the API changed?)");
  }
  console.log("Do something with the users.");
}).catch(({message}) => {
  console.error(message);
});
```

```console
$ node index.mjs
Do something with the users.
```

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).
