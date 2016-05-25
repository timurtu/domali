/**
 * Created by timur on 5/24/16.
 */

import dom from '../../../lib/domali'

describe('render', () => {
  it('should append an element to the body', () => {

    const foo = dom.create('foo')

    foo.setAttribute('id', 'foo')

    dom.render(foo)

    assert(dom.getId('foo'))
  })
})