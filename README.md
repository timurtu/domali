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
No matter how [well documented](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) it is, many
parts of the JavaScript DOM API are verbose, and will have you writing the same code more than once. Using a JavaScript
DOM manipulation libraries like jQuery make your code leaner, but also forces you to conform to it, taking away your
control over the native DOM API.

Domali extends element prototypes. This means objects including `Node`, `NodeList`, `NamedNodeMap`, and `HtmlCollection` will have domali functions built in.

Domali checks if elements and properties exist before accessing and mutating them.

This means that using domali, you'll never need to call `hasChildNode()` or `elem.classList.contains('class-name')` again.


## ECMAScript Syntax!

### Destructuring

#### domali

```javascript
const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz');

console.log(foo, bar, baz)
```

#### DOM API

```javascript
const foo = document.getElementById('foo');
const bar = document.getElementById('bar');
const baz = document.getElementById('baz');

console.log(foo, bar, baz)
```

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
