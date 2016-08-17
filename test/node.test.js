/**
 * Created by timur on 5/24/16.
 */

import dom from '../lib/domali'


describe('node functions', function () {
  
  describe('set', function () {
    
    it('should set an attribute', function () {
      
      const foo = document.createElement('div')
      
      foo.set({ id: 'bar' })
      
      expect(foo.getAttribute('id')).to.equal('bar')
    })
    
    it('should set a few attributes', function () {
      
      const foo = dom
        .create('a')
        .set({
          id: 'my-link',
          class: 'link',
          href: 'https://google.com'
        })
      
      expect(foo.getAttribute('id')).to.equal('my-link')
      expect(foo.getAttribute('class')).to.equal('link')
      expect(foo.getAttribute('href')).to.equal(
        'https://google.com')
    })
    
    it('should set a few attributes with a functional syntax', function () {
      
      const foo = dom
        .create('a')
        .set({
          id: 'my-link'
        })
        .set({
          class: 'link'
        })
        .set({
          href: 'https://google.com'
        })
      
      expect(foo.getAttribute('id')).to.equal('my-link')
      expect(foo.getAttribute('class')).to.equal('link')
      expect(foo.getAttribute('href')).to.equal(
        'https://google.com')
    })
    
  })
  
  describe('get', function () {
    
    it('should get an attribute', function () {
      
      const img = document.createElement('img')
      
      img.setAttribute('src', 'my-image.png')
      
      expect(img.get('src')).to.equal('my-image.png')
    })
    
    it('should get a few attributes', function () {
      
      const img = document.createElement('img')
      
      img.setAttribute('src', 'my-image.png')
      img.setAttribute('class', 'photo')
      img.setAttribute('id', 'main-image')
      
      const attributes = img.get('src', 'class', 'id')
      
      expect(attributes[0]).to.equal('my-image.png')
      expect(attributes[1]).to.equal('photo')
      expect(attributes[2]).to.equal('main-image')
    })
    
    it('should get a few attributes with destructuring', function () {
      
      const img = document.createElement('img')
      
      img.setAttribute('src', 'my-image.png')
      img.setAttribute('class', 'photo')
      img.setAttribute('id', 'main-image')
      
      const [imgSrc, imgClass, imgId] = img.get('src', 'class',
        'id')
      
      expect(imgSrc).to.equal('my-image.png')
      expect(imgClass).to.equal('photo')
      expect(imgId).to.equal('main-image')
    })
    
  })
  
  describe('text', function () {
    
    it('should create a new text node', function () {
      const div = dom.create('div').text('hello')
      expect(div.innerHTML).to.equal('hello')
    })
    
    it('should update an existing text node', function () {
      const div = dom.create('div').text('hello').text('goodbye')
      expect(div.innerHTML).to.equal('goodbye')
    })
    
  })
  
  describe('clone', function () {
    
    it('should clone an existing element', () => {
      
      const div = dom.create('div').text('hey')
      
      const newDiv = dom.clone(div)
      
      const text = newDiv.innerHTML
      
      expect(text).to.equal('hey')
    })
    
    it('should also clone child nodes', function () {
      
      const divs = dom.create('div')
      
      divs.push(dom.create('div'))
      divs.push(dom.create('div'))
      divs.push(dom.create('div'))
      
      const newDiv = dom.clone(divs)
      
      const newChildren = newDiv.innerHTML
      
      expect(newChildren).to.equal('<div></div><div></div><div></div>')
    })
    
    it('should not mutate the original element', function () {
      
      const div = dom.create('div').text('hello')
      
      const newDiv = dom.clone(div).text('goodbye')
      
      expect(div.innerHTML).to.equal('hello')
      expect(newDiv.innerHTML).to.equal('goodbye')
    })
    
  })
  
})
