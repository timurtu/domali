/**
 * Created by timur on 5/22/16.
 */

import dom from '../../../lib/domali'

import { testArg, called } from '../test.utils.js'

describe('selectors', function () {
	
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
	
	describe('select', function () {
		
		let spy
		
		beforeEach(function () {
			spy = sinon.spy(document, 'querySelector')
		})
		
		afterEach(function () {
			document.querySelector.restore()
		})
		
		it('should call document.querySelector once', function () {
			
			dom.select('.container')
			
			testArg(0, '.container', spy)
			
			called(1, spy)
		})
	})
	
	describe('selectAll', function () {
		
		let spy
		
		beforeEach(function () {
			spy = sinon.spy(document, 'querySelectorAll')
		})
		
		afterEach(function () {
			document.querySelectorAll.restore()
		})
		
		it('should call document.querySelectorAll once', function () {
			
			dom.selectAll('wrapper')
			
			testArg(0, 'wrapper', spy)
			
			called(1, spy)
		})
	})
})
