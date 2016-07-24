/**
 * Created by timur on 5/24/16.
 */

import dom from 'domali'

const foo = dom
	.create('foo')
	.set({
		id: 'bar',
		class: 'baz'
	})

dom.render(foo)

foo.textContent = 'testing 123...'

dom.render(dom.create('div'))
