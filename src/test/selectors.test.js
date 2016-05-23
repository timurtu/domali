/**
 * Created by timur on 5/22/16.
 */

import dom from '../domali'
import {assert, expect} from 'chai'

describe('selectors', () => {

  describe('getId', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'getElementById')
    })

    afterEach(() => {
      document.getElementById.restore()
    })

    it('should call getElementById once with 1 param', () => {

      const id = 'foo'

      dom.getId(id)

      assert(document.getElementById.calledOnce)
      assert(document.getElementById.calledWith(id))
      assert.strictEqual(document.getElementById.callCount, 1)
      assert(spy.returned)

    })

    xit('should call getElementById once with 2 params', () => {

      dom.getId('foo', 'bar', sinon.spy())

      assert(document.getElementById.calledWith('foo'))
      assert(document.getElementById.calledWith('bar'))
      assert.strictEqual(document.getElementById.callCount, 2)
    })

    xit('should call getElementById twice with 3 params', () => {

      dom.getId('foo', 'bar', 'baz', sinon.spy())

      assert(document.getElementById.calledWith('foo'))
      assert(document.getElementById.calledWith('bar'))
      assert(document.getElementById.calledWith('baz'))
    })

  })
  
})
