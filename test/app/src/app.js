/**
 * Created by timur on 5/24/16.
 */

import dom from 'domali'

const foo = dom.create('foo')

dom.set(foo, {
  id: 'foo',
  class: 'foo'
})

dom.render(foo)

foo.textContent = 'foo'

console.log(dom.getId('foo'))
