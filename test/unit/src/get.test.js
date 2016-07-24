/**
 * Created by timur on 7/24/16.
 */

import dom from '../../../lib/domali'

import { testArg, called } from '../test.utils.js'

describe('getId', function () {
	
	let spy
	
	beforeEach(function () {
		spy = sinon.spy(document, 'getElementById')
	})
	
	afterEach(function () {
		document.getElementById.restore()
	})
	
	it('should call getElementById once', function () {
		
		dom.getId('foo')
		
		testArg(0, 'foo', spy)
		
		called(1, spy)
	})
	
	it('should call getElementById 3 times', function () {
		
		dom.getId('foo', 'bar', 'baz')
		
		testArg(0, 'foo', spy)
		testArg(1, 'bar', spy)
		testArg(2, 'baz', spy)
		
		called(3, spy)
	})
	
})

describe('getClass', function () {
	
	let spy
	
	beforeEach(function () {
		spy = sinon.spy(document, 'getElementsByClassName')
	})
	
	afterEach(function () {
		document.getElementsByClassName.restore()
	})
	
	it('should call document.getElementsByClassName once', function () {
		
		dom.getClass('container')
		
		testArg(0, 'container', spy)
		
		called(1, spy)
	})
})

describe('getTags', function () {
	
	let spy
	
	beforeEach(function () {
		spy = sinon.spy(document, 'getElementsByTagName')
	})
	
	afterEach(function () {
		document.getElementsByTagName.restore()
	})
	
	it('should call document.getElementsByTagName once', function () {
		
		dom.getTags('input')
		
		testArg(0, 'input', spy)
		
		called(1, spy)
	})
})