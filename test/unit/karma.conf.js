module.exports = function (config) {
	
	config.set({
		
		browsers: ['PhantomJS'],
		
		frameworks: ['mocha', 'chai', 'sinon'],
		
		files: [
			{
				pattern: './dist/test.js',
				watched: true,
				served: true,
				included: true
			}
		],
		
		preprocessors: {
			'../../src/**/*.js': ['coverage']
		},
		
		reporters: ['spec', 'coverage']
	})
}
