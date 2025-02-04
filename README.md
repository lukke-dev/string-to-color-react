# String to color React

Generates a hexadecimal color depending on the input string, also allows passing default colors/schema.

[![npm version](https://badge.fury.io/js/string-to-color.svg)](https://badge.fury.io/js/string-to-color-react) ![](https://img.shields.io/npm/dm/string-to-color-react.svg)

## NPM

Link: https://www.npmjs.com/package/string-to-color-react

## Install

```bash
npm install string-to-color-react
```
```bash
yarn add string-to-color-react
```
## Demo

Link: https://demo-string-to-color-react-bvecj2wl7-lukke-dev.vercel.app/

![Alt text](https://i.ibb.co/7Y776SJ/Screenshot-from-2023-06-29-14-29-20.png "Demo")

## Usage

```js
import { generateColorFromString } from 'string-to-color-react'
const primary = generateColorFromString('foo') // => "#c68c01"
const secondary = generateColorFromString('name') // => "#8b7a33"
```

or pass an array of options, like a schema!

```js
import { generateColorFromString } from 'string-to-color-react'
const schemaOptions = ['red', 'green', 'teal', 'yellow']
const color = generateColorFromString('foo', schemaOptions) // => "teal"
const color = generateColorFromString('name', schemaOptions) // => "yellow"
```
## License

MIT.
