# Alias Library for the DOM API

The goal of domali is to provide a JavaScript DOM API that is less verbose and
more readable, while keeping the core functionality intact. You can use
all of the native JavaScript DOM functions and objects with domali.

## Install
`jspm install domali`

## Usage
```javascript
import dom from 'domali'

const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz')

console.log(foo, bar, baz)
```
> For more, refer to the [Documentation](docs/api.md)

## Problem Statement
- No matter how
[well documented](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
it is, many parts of the JavaScript DOM API are verbose, and will have you
writing the same code more than once.

- Using JavaScript DOM manipulation libraries like jQuery make your code
leaner, but also force you to conform to them, taking away your control
over the native DOM API.

## Build

1. Install [node](https://nodejs.org)
1. Install [git](https://git-scm.org)
1. `git clone https://github.com/timurtu/domali.git`
1. `cd domali`
1. `npm install` to install dev dependencies
1. `npm test` to run tests
