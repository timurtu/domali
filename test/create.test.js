/**
 * Created by timur on 7/24/16.
 */

import dom from '../lib/domali'
import {
  testArg,
  called
} from './test.utils'

describe('create', function () {

  let spy

  beforeEach(function () {
    spy = sinon.spy(document, 'createElement')
  })

  afterEach(function () {
    document.createElement.restore()
  })

  it('should create an element', function () {
    expect(dom.create('div').outerHTML).to.equal('<div></div>')
  })

  it('should create an empty element', function () {
    expect(dom.create('div').innerHTML).to.equal('')
  })

  it('should call document.createElement once', function () {

    dom.create('div')

    testArg(0, 'div', spy)

    called(1, spy)
  })

  it('should call document.createElement 3 times', function () {

    dom.create('h1', 'a', 'p')

    testArg(0, 'h1', spy)
    testArg(1, 'a', spy)
    testArg(2, 'p', spy)

    called(3, spy)
  })

})
