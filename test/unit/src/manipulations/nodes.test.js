/**
 * Created by timur on 5/24/16.
 */

import dom from '../../../../lib/domali'

describe('node functions', () => {

  describe('set', () => {

    it('should set an attribute', () => {

      const foo = document.createElement('div')

      foo.set({id: 'bar'})

      expect(foo.getAttribute('id')).to.equal('bar')
    })

    it('should set a few attributes', () => {

      const foo = dom
        .create('a')
        .set({
          id: 'my-link',
          class: 'link',
          href: 'https://google.com'
        })

      expect(foo.getAttribute('id')).to.equal('my-link')
      expect(foo.getAttribute('class')).to.equal('link')
      expect(foo.getAttribute('href')).to.equal('https://google.com')
    })

    it('should set a few attributes with a functional syntax', () => {

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
      expect(foo.getAttribute('href')).to.equal('https://google.com')
    })

  })

  describe('get', () => {

    it('should get an attribute', () => {

      const img = document.createElement('img')

      img.setAttribute('src', 'my-image.png')

      expect(img.get('src')).to.equal('my-image.png')
    })

    it('should get a few attributes', () => {

      const img = document.createElement('img')

      img.setAttribute('src', 'my-image.png')
      img.setAttribute('class', 'photo')
      img.setAttribute('id', 'main-image')

      const attributes = img.get('src', 'class', 'id')

      expect(attributes[0]).to.equal('my-image.png')
      expect(attributes[1]).to.equal('photo')
      expect(attributes[2]).to.equal('main-image')
    })

    it('should get a few attributes with destructuring', () => {

      const img = document.createElement('img')

      img.setAttribute('src', 'my-image.png')
      img.setAttribute('class', 'photo')
      img.setAttribute('id', 'main-image')

      const [imgSrc, imgClass, imgId] = img.get('src', 'class', 'id')

      expect(imgSrc).to.equal('my-image.png')
      expect(imgClass).to.equal('photo')
      expect(imgId).to.equal('main-image')
    })

  })

})