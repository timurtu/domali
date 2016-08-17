/**
 * Created by timur on 8/17/16.
 */

import dom from '../lib/domali'

describe('text', () => {
  
  it('should create a new text node', () => {
    const div = dom.create('div').text('hello')
    expect(div.innerHTML).to.equal('hello')
  })
  
  it('should update an existing text node', () => {
    const div = dom.create('div').text('hello').text('goodbye')
    expect(div.innerHTML).to.equal('goodbye')
  })
  
})
