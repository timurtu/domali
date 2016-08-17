# Alias Library for the DOM API

[![Build Status](https://travis-ci.org/timurtu/domali.svg?branch=master)](https://travis-ci.org/timurtu/domali?branch=master) [![npm version](https://img.shields.io/badge/npm-2.0.3-blue.svg)](https://www.npmjs.com/package/domali)

The goal of domali is to provide a more readable DOM API while keeping the core functionality intact. You can use all of the native JavaScript DOM functions and objects with domali.

## Usage

```javascript
import dom from 'domali'

const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz')

console.log(foo, bar, baz)
```


### Install domali with npm `npm install --save domali`

### Or install domali with jspm `jspm install domali`

Load domali through a module loader for the browser. Popular choices for module loading include [webpack](https://webpack.github.io/), [jspm](http://jspm.io), and [browserify](http://browserify.org/). Destructuring requires ES6.

## API

#### dom.getId (string) - Get an element by its id
```javascript
const foo = dom.getId('foo')
```

#### dom.getId (strings) - Get multiple elements by their ids
```javascript
const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz')
```

#### dom.getClass (string) - Get multiple elements by their class name
```javascript
const bar = dom.getClass('bar')
```

#### dom.getTags (string) - Get multiple elements by their tag name
```javascript
const divs = dom.getTags('div')
```

#### dom.select (string) - Select an element with a query
```javascript
const foo = dom.select('#foo')
```

#### dom.selectAll (string) - Select multiple elements with a query
```javascript
const baz = dom.selectAll('.baz')
```

#### dom.create (string) - Create a new element
```javascript
const div = dom.create('div')

console.log(div === '<div></div>') // true
```

#### dom.create (strings) - Create multiple new elements
```javascript
const [ p, a, img ] = dom.create('p', 'a', 'img')

console.log(p === '<p></p>') // true
console.log(a === '<a></a>') // true
console.log(img === '<img></img>') // true
```

#### dom.render (element) - Render an element to the DOM
```javascript
const div = dom.create('div').text('Hello, domali!')

dom.render(div)
```

#### dom.clear () - Clear everything from the DOM
```javascript
dom.clear()
```

#### element.text (string) - Add or update an element's text
```javascript
const div = dom.create('div').text('hello')

console.log(div.textContent === 'hello') // true
```

#### element.push (element) - Append a child element after an element's children
```javascript
const div = dom.create('div')

div.push(dom.create('div'))
div.push(dom.create('i'))
div.push(dom.create('span'))

console.log(div.firstChild === '<div></div>') // true
```

#### element.unshift (element) - Insert a child element before an element's children
```javascript
const div = dom.create('div')

div.unshift(dom.create('div'))
div.unshift(dom.create('i'))
div.unshift(dom.create('span'))

console.log(div.firstChild === '<span></span>') // true
```

#### element.map (fn (element)) - Transform an element's children
```javascript
const rootDiv = dom.create('div')

rootDiv.push(dom.create('div'))
rootDiv.push(dom.create('div'))
rootDiv.push(dom.create('div'))

const newDiv = rootDiv.map(div => {

  console.log(div) // <div></div>
    
  return dom.create('a')
})

console.log(newDiv)
// <div>
//   <a></a>
//   <a></a>
//   <a></a>
// </div>
```

#### element.set (object) - Set an element's attribute
```javascript
const div = dom
  .create('div')
  .set({ id: 'foo' })
  
console.log(div) // <div id="foo"></div>
```

#### element.get (string) - Get an element's attribute
```javascript
const divId = dom
  .create('div')
  .set({ id: 'foo' })
  .get('id') 
  
console.log(divId) // foo
```

#### element.set (object) - Set multiple element attributes
```javascript
const a = dom
  .create('a')
  .set({ 
    id: 'my-link',
    href: 'https://google.com',
    class: 'link'
  }) 
  
console.log(a) // <a id="my-link" href="https://google.com" class="link"></a>
```

#### element.get (strings) - Get multiple element attributes
```javascript
const [imgId, imgSrc, imgClass] = dom
  .create('img')
  .set({ 
    id: 'my-image',
    src: 'some-image.png',
    class: 'photo'
  })
  .get('id', 'src', 'class')
  
console.log(imgId) // my-image
console.log(imgSrc) // some-image.png
console.log(imgClass) // photo
```
