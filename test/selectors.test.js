/**
 * Created by timur on 5/22/16.
 */

import dom from '../lib/domali'

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

    it('should call getElementById once', () => {

      dom.getId('foo')

      testArg(0, 'foo', spy)
      called(1, spy)
    })

    it('should call getElementById twice', () => {

      dom.getId('foo', 'bar')

      testArg(0, 'foo', spy)
      testArg(1, 'bar', spy)

      called(2, spy)
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

    it('calls document.createElement once', () => {

      dom.create('div')

      testArg(0, 'div', spy)

      called(1, spy)
    })

    it('calls document.createElement twice', () => {

      dom.create('img', 'script')

      testArg(0, 'img', spy)
      testArg(1, 'script', spy)

      called(2, spy)
    })

    it('calls document.createElement 3 times', () => {

      dom.create('h1', 'a', 'p')

      testArg(spy, 0, 'h1', 0)
      testArg(spy, 1, 'a', 0)
      testArg(spy, 2, 'p', 0)

      called(3)
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

/**
 * Tests that the spy was called with a given argument
 *
 * @param callIndex which call
 * @param spy The spy function to test
 * @param arg which argument to test
 */
function testArg(callIndex, arg, spy) {
  expect(spy.getCall(callIndex).args[0]).to.equal(arg)
}

/**
 * Amount of times the spy was called
 *
 * @param amount
 * @param spy
 */
function called(amount, spy) {
  expect(spy.callCount).to.equal(amount)
}
