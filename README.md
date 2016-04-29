# domali

## Alias library for the DOM API

Domali's goal is to provide a JavaScript DOM API that is less verbose and more readable, while keeping the core functionality intact. You can use all of the native JavaScript DOM functions and objects with domali.


## Install with JSPM

`jspm install domali`

## Usage

```javascript
import dom from 'domali'
```


## Problem Statement
Many parts of the JavaScript DOM API are verbose, and it will have you writing the same code more than once. Using a JavaScript DOM manipulation library like jQuery makes your code leaner, but also forces you to conform to it, taking away your control over the native DOM API.

Handle element prototypes. This means extending Objects like Node, NodeList, NamedNodeMap, and HtmlCollection.

Domali checks if elements and properties exist before accessing and mutating them.

This means that using domali, you'll never need to call `hasChildNode()` or `elem.classList.contains('class-name')` again.

#### domali
```javascript
dom.getId('foo')
```

#### DOM API
```javascript
document.getElementById('foo')
```

#### domali
```javascript
dom.getClass('bar')
```

#### DOM API
```javascript
document.getElementsByClassName('bar')
```

#### domali
```javascript
dom.select('nav .tab')
```

#### DOM API
```javascript
document.querySelector('nav .tab')
```

Call `forEach` on Dom elements!

Iterate over them without a mess of code.

in: `NodeList`, `NamedNodeMap`, or `HtmlCollection`

out: Iterable function that returns every element in the Array

## ES6 Syntax!

### Destructuring

#### domali

```javascript
const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz');
```

#### DOM API

```javascript
const foo = document.getElementById('foo');
const bar = document.getElementById('bar');
const baz = document.getElementById('baz');
```