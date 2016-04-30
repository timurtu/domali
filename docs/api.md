# domali docs

## Install with [JSPM](http://jspm.io)

`jspm install domali`


## Usage

```javascript
import dom from 'domali'
```

### Get Element by id
DOM API | domali
--- | ---
`document.getElementById('foo')` | `dom.getId('foo')`

### Get Multiple Elements by id
DOM API | domali
--- | ---
`const foo = document.getElementById('foo')` | `const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz')`
`const bar = document.getElementById('bar')` |
`const baz = document.getElementById('baz')` |
`console.log(foo, bar, baz)` | `console.log(foo, bar, baz)`

### Get Elements by Class Name
DOM API | domali
--- | ---
`document.getElementsByClassName('foo')` | dom.getClass('foo')

### Selecting an Element
DOM API | domali
--- | ---
`document.querySelector('#foo')` | `dom.select('#foo')`

### Selecting Multiple Elements
DOM API | domali
--- | ---
`document.querySelectorAll('.bar')` | `dom.selectAll('.bar')`
