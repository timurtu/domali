/**
 * Created by timur on 8/17/16.
 */

import dom from '../lib/domali'


describe('push', () => {
  
  it('should append a child node to a target node', () => {
    
    const div = dom.create('div')
    
    expect(div.hasChildNodes()).to.equal(false)
    
    div.push(dom.create('div'))
    
    assert(div.hasChildNodes())
  })
  
  it('should append a child node to the end of a target node', () => {
    
    const div = dom.create('div')
  
    div.push(dom.create('div').text('hey'))
    div.push(dom.create('p'))
    
    const first = div.firstChild.innerHTML
    
    expect(first).to.equal('hey')
  })
})

describe('unshift', () => {
  
  it('should insert a child node to the beginning of a target node', () => {
  
    const div = dom.create('div')
  
    div.unshift(dom.create('div'))
    div.unshift(dom.create('p').text('hey'))
  
    const first = div.firstChild.innerHTML
  
    expect(first).to.equal('hey')
  })
  
  it('should insert a child node to the beginning of all target child nodes', () => {
    
    const div = dom.create('div')
    
    div.unshift(dom.create('img'))
    div.unshift(dom.create('a'))
    div.unshift(dom.create('ul'))
    div.unshift(dom.create('li'))
    div.unshift(dom.create('p').text('hey'))
    
    const first = div.firstChild.innerHTML
    
    expect(first).to.equal('hey')
  })
})

describe('map', () => {
  
  it('should transform all child nodes of a node', () => {
    
    const divs = dom.create('div')
    
    divs.push(dom.create('div'))
    divs.push(dom.create('div'))
    divs.push(dom.create('div'))
    
    const newDiv = divs.map(div => {
      
      assert(div)
      return dom.create('a')
    })
    
    const aTags = newDiv.innerHTML
    
    expect(aTags).to.equal('<a></a><a></a><a></a>')
  })
})
