/**
 * Created by timur on 5/24/16.
 */

import dom from '../../../lib/domali'

describe('render', () => {
  it('should append an element to the body', () => {

    const foo = dom.create('foo')

    dom.set(foo, {id: 'foo'})

    dom.render(foo)

    expect(dom.getId('foo')).to.equal(foo)
  })
})

describe('clear', () => {
  it('should remove all elements from the dom', () => {

    const a = dom.create('a')

    dom.set(a, {id: 'link'})

    dom.render(a)

    dom.clear()

    expect(dom.getId('link')).to.be.null

  })
})