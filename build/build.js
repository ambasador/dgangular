({
	baseUrl: '../js/scripts',
	mainConfigFile: '../js/scripts/main.js',
	name: 'main',
	out: '../dist/scripts.min.js',
	preserveLicenseComments: false,
	paths: {
		requireLib: 'vendors/requirejs/require',
	},
	include: 'requireLib',

})