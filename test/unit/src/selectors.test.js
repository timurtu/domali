/**
 * Created by timur on 5/22/16.
 */

import dom from '../../../lib/domali'

import {testArg, called} from '../test.utils.js'

describe('selectors', () => {

  describe('getId', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'getElementById')
    })

    afterEach(() => {
      document.getElementById.restore()
    })

    it('should call getElementById once', () => {

      dom.getId('foo')

      testArg(0, 'foo', spy)

      called(1, spy)
    })

    it('should call getElementById 3 times', () => {

      dom.getId('foo', 'bar', 'baz')

      testArg(0, 'foo', spy)
      testArg(1, 'bar', spy)
      testArg(2, 'baz', spy)

      called(3, spy)
    })

  })

  describe('create', () => {

    var spy

    beforeEach(() => {
      spy = sinon.spy(document, 'createElement')
    })

    afterEach(() => {
      document.createElement.restore()
    })

    it('should create an element', () => {
      const div = dom.create('div')
      expect(div.outerHTML).to.equal('<div></div>')
      expect(div.innerHTML).to.equal('')
    })

    it('should call document.createElement once', () => {

      dom.create('div')

      testArg(0, 'div', spy)

      called(1, spy)
    })

    it('should call document.createElement 3 times', () => {

      dom.create('h1', 'a', 'p')

      testArg(0, 'h1', spy)
      testArg(1, 'a', spy)
      testArg(2, 'p', spy)

      called(3, spy)
    })

  })

  describe('getClass', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'getElementsByClassName')
    })

    afterEach(() => {
      document.getElementsByClassName.restore()
    })

    it('should call document.getElementsByClassName once', () => {

      dom.getClass('container')

      testArg(0, 'container', spy)

      called(1, spy)
    })
  })

  describe('getTags', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'getElementsByTagName')
    })

    afterEach(() => {
      document.getElementsByTagName.restore()
    })

    it('should call document.getElementsByTagName once', () => {

      dom.getTags('input')

      testArg(0, 'input', spy)

      called(1, spy)
    })
  })

  describe('select', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'querySelector')
    })

    afterEach(() => {
      document.querySelector.restore()
    })

    it('should call document.querySelector once', () => {

      dom.select('.container')

      testArg(0, '.container', spy)

      called(1, spy)
    })
  })

  describe('selectAll', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'querySelectorAll')
    })

    afterEach(() => {
      document.querySelectorAll.restore()
    })

    it('should call document.querySelectorAll once', () => {

      dom.selectAll('wrapper')

      testArg(0, 'wrapper', spy)

      called(1, spy)
    })
  })

})
