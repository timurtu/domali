# Domali Documentation

## Install with JSPM

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