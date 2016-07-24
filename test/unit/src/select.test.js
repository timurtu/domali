/**
 * Created by timur on 7/24/16.
 */

import dom from '../../../lib/domali'

import { testArg, called } from '../test.utils.js'

describe('select functions', function () {
	
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
