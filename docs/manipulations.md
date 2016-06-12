
### Set a DOM Node attribute
```javascript
const div = dom
  .create('div')
  .set({ id: 'foo' })
  
  // <div id="foo"></div>
```

### Get a DOM Node attribute

```javascript
const divId = dom
  .create('div')
  .set({ id: 'foo' })
  .get('id') 
  
  // foo
```

### Set multiple DOM Node attributes
```javascript
const a = dom
  .create('a')
  .set({ 
    id: 'my-link',
    href: 'https://google.com',
    class: 'link'
  }) 
  
  // <a id="my-link" href="https://google.com" class="link"></a>
```

### Get multiple DOM Node attributes
```javascript
const [imgId, imgSrc, imgClass] = dom
  .create('img')
  .set({ 
    id: 'my-image',
    src: 'some-image.png',
    class: 'photo'
  })
  .get('id', 'src', 'class')
  
  // imgId = my-image
  // imgSrc = some-image.png
  // imgClass = photo
```
