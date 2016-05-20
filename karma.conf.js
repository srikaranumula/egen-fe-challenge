// Karma configuration
// Generated on Fri May 20 2016 02:09:13 GMT+0530 (India Standard Time)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath : '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks : ['jasmine'],

		// list of files / patterns to load in the browser
		files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'lib/phNumFilter.js',
			'test/*.js'
		],

		// list of files to exclude
		exclude : [
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors : {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters : ['progress', 'html'],

		// web server port
		port : 9876,

		// enable / disable colors in the output (reporters and logs)
		colors : true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel : config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch : true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers : ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun : true,

		//html report generation
		htmlReporter : {
			outputDir : 'test_report', // where to put the reports
			templatePath : null, // set if you moved jasmine_template.html
			focusOnFailures : true, // reports show failures on start
			namedFiles : true, // name files instead of creating sub-directories
			pageTitle : 'Phone Filter test report', // page title for reports; browser info by default
			urlFriendlyName : false, // simply replaces spaces with _ for files/dirs
			//reportName : 'test_reports', // report summary filename; browser info by default


			// experimental
			preserveDescribeNesting : false, // folded suites stay folded
			foldAll : false, // reports start folded (only with preserveDescribeNesting)
		}
	})
}
