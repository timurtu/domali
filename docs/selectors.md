
### Get Element by id
```javascript
const foo = dom.getId('foo')
```

### Get Multiple Elements by id
`const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz')`

### Create Element
`dom.create('div')`

### Create Multiple Elements
`const [ p, a, img ] = dom.create('p', 'a', 'img')`

### Get Elements by Class Name
`dom.getClass('bar')`

### Get Elements by Tag Name
`dom.getTags('div')`

### Selecting an Element
`dom.select('#foo')`

### Selecting Multiple Elements
`dom.selectAll('.baz')`
