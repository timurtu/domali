/**
 * Created by timur on 5/24/16.
 */

import dom from 'domali'

const div = dom.create('div')

div.setAttribute('id', 'foo')

document.body.appendChild(div)

div.textContent = 'foo'

console.log(dom.getId('foo'))
