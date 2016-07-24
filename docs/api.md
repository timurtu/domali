### Install domali with npm
`npm install --save domali`

### Or install domali with jspm
`jspm install domali`

domali assumes module loading in the browser. Popular choices to use for browser module loading include [webpack](https://webpack.github.io/), [jspm](http://jspm.io), and [browserify](http://browserify.org/). domali assumes ES6.

## Using domali

```javascript
import dom from 'domali'

dom.render(dom.create('div'))
```

Executing the above snippet will result in the following when loaded in the browser.

```html
...
<body>
  ...
  <div></div>
</body>
...
```
