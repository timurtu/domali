# domali docs

## Install domali with [JSPM](http://jspm.io)

`jspm install domali`

## Using domali

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

### Create Element
DOM API | domali
--- | ---
`document.createElement('div')` | `dom.create('div')`

### Create Multiple Elements
DOM API | domali
--- | ---
`const p = document.createElement('p')` | `const [ p, a, img ] = dom.create('p', 'a', 'img')`
`const a = document.createElement('a')` |
`const img = document.createElement('img')` |

### Get Elements by Class Name
DOM API | domali
--- | ---
`document.getElementsByClassName('foo')` | `dom.getClass('foo')`

### Get Elements by Tag Name
DOM API | domali
--- | ---
`document.getElementsByTagName('div')` | `dom.getTags('div')`

### Selecting an Element
DOM API | domali
--- | ---
`document.querySelector('#foo')` | `dom.select('#foo')`

### Selecting Multiple Elements
DOM API | domali
--- | ---
`document.querySelectorAll('.bar')` | `dom.selectAll('.bar')`
