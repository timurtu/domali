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

    it('should call getElementById once', () => {

      dom.getId('foo')

      expect(spy.getCall(0).args[0]).to.equal('foo')
      expect(spy.callCount).to.equal(1)
    })

    it('should call getElementById twice', () => {

      dom.getId('foo', 'bar')

      expect(spy.getCall(0).args[0]).to.equal('foo')
      expect(spy.getCall(1).args[0]).to.equal('bar')
      expect(spy.callCount).to.equal(2)
    })

    it('should call getElementById 3 times', () => {

      dom.getId('foo', 'bar', 'baz')

      expect(spy.getCall(0).args[0]).to.equal('foo')
      expect(spy.getCall(1).args[0]).to.equal('bar')
      expect(spy.getCall(2).args[0]).to.equal('baz')
      expect(spy.callCount).to.equal(3)
    })

  })

  describe('create', () => {

    let spy

    beforeEach(() => {
      spy = sinon.spy(document, 'createElement')
    })

    afterEach(() => {
      document.createElement.restore()
    })

    it('calls document.createElement once', () => {

      dom.create('div')

      expect(spy.getCall(0).args[0]).to.equal('div')
      expect(spy.callCount).to.equal(1)
    })

    it('calls document.createElement twice', () => {

      dom.create('img', 'script')

      expect(spy.getCall(0).args[0]).to.equal('img')
      expect(spy.getCall(1).args[0]).to.equal('script')
      expect(spy.callCount).to.equal(2)
    })

    it('calls document.createElement 3 times', () => {

      dom.create('h1', 'a', 'p')

      expect(spy.getCall(0).args[0]).to.equal('h1')
      expect(spy.getCall(1).args[0]).to.equal('a')
      expect(spy.getCall(2).args[0]).to.equal('p')
      expect(spy.callCount).to.equal(3)
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
      expect(spy.callCount).to.equal(1)
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
      expect(spy.callCount).to.equal(1)
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
      expect(spy.callCount).to.equal(1)
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
      expect(spy.callCount).to.equal(1)
    })
  })

})
