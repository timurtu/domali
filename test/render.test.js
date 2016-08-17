/**
 * Created by timur on 5/24/16.
 */

import { expect, assert } from 'chai'
import dom from '../lib/domali'


describe('render functions', function () {
  
  describe('render', function () {
    
    it('should append an element to the body', function () {
      
      const foo = document.createElement('foo')
      
      foo.setAttribute('id', 'foo')
      
      dom.render(foo)
      expect(document.getElementById('foo')).to.equal(foo)
    })
  })
  
  describe('clear', function () {
    
    it('should remove all elements from the dom', function () {
      
      const a = document.createElement('a')
      
      a.setAttribute('id', 'link')
      
      document.body.appendChild(a)
      
      assert(document.getElementById('link'))
      
      dom.clear()
      
      expect(document.getElementById('link')).to.be.a('null')
    })
  })
})
