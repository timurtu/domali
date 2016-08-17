/**
 * Created by timur on 8/17/16.
 */

import test from 'ava'
import sinon from 'sinon'
import { text } from '../lib/text'

let spy
const document = {
  createTextNode(msg) {
    
  }
}

test.beforeEach(() => {
  spy = sinon.spy(document, 'createTextNode')
})

test('should create a new text node', t => {
  const msg = 'hello'
  text(msg)
  t.true(spy.calledWithExactly(msg))
})


