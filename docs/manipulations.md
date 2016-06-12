
### Set DOM Node attributes
```javascript
const div = dom.create('div')

div.set({ id: 'foo' }) // <div id="foo"></div>
```

### Get DOM Node attributes

```javascript
const div = dom.create('div').set({ id: 'foo' })

div.get('id') // foo
```