
### Get Element by id
```javascript
const foo = dom.getId('foo')
```

### Get Multiple Elements by id
```javascript
const [ foo, bar, baz ] = dom.getId('foo', 'bar', 'baz')
```

### Create Element
```javascript
const div = dom.create('div')
```

### Create Multiple Elements
```javascript
const [ p, a, img ] = dom.create('p', 'a', 'img')
```

### Get Elements by Class Name
```javascript
const bar = dom.getClass('bar')
```

### Get Elements by Tag Name
```javascript
const divs = dom.getTags('div')
```

### Selecting an Element
```javascript
const foo = dom.select('#foo')
```

### Selecting Multiple Elements
```javacript
const baz = dom.selectAll('.baz')
```
