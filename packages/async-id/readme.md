# async-id

Creates a cryptographically secure UID with a 62 character range that can be safely used in URLs.

## Usage

Install the package:

```js
npm i async-id
```

Then import it:

```js
import { uid } = from 'async-id';
```

Finally, call it:

```js
await uid(20);
```

## API

**`uid(Number len) => Promise`**

- Return a `Promise` that resolves with a string of random characters
  of length `len`
- `len` must always be provided, else the promise is rejected
- Under the hood, `crypto.randomBytes` is used
- Character set: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

## Authors

- Pol Gubau Amores ([website](https://polgubau.com))

Based in packages developed by Guillermo Rauch & Leo Lamprecht
