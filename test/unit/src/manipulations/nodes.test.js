/**
 * Created by timur on 5/24/16.
 */

import dom from '../../../../lib/domali'

describe('node functions', () => {

  describe('set', () => {

    it('should set an attribute', () => {

      const foo = dom.create('foo')

      dom.set(foo, {
        id: 'bar'
      })

      expect(foo.getAttribute('id')).to.equal('bar')

    })

  })

  describe('get', () => {

    it('should get an attribute', () => {

      const foobar = dom.create('foobar')

      foobar.setAttribute('id', 'foobar')

      expect(dom.get(foobar, 'id')).to.equal('foobar')

    })

  })

})