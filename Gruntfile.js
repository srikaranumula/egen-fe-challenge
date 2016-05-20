var LIVERELOAD_PORT = 35729;

var lrSnippet = require('connect-livereload')({
		port : LIVERELOAD_PORT
	});

var livereloadMiddleware = function (connect, options) {
	return [
		lrSnippet,
		connect.static(options.base),
		connect.directory(options.base)
	];
};

module.exports = function (grunt) {

	grunt.initConfig({
		distFolder : 'dist',
		pkg : grunt.file.readJSON('package.json'),
		
		copy : {
			dist : {
				files : [{
						src : 'example/index.html',
						dest : 'dist/index.html'
					}
				]
			}
		},

		'useminPrepare' : {
			options : {
				dest : 'dist'
			},
			html : 'example/index.html'
		},

		usemin : {
			html : ['dist/index.html']
		},
        
		connect : {
			client : {
				options : {
					port : 9000,
					base : 'dist',
					debug : true,
				}
			}
		},
		watch : {
			client : {
				files : ['example/**/*'],
				tasks : [],
				options : {
					livereload : LIVERELOAD_PORT
				}
			}
		}
	}); // The end of grunt.initConfig

	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register our own custom task alias.
	grunt.registerTask('serve', ['connect:client', 'watch:client']);
    grunt.registerTask('buildEx', ['useminPrepare', 'copy', 'concat','cssmin', 'uglify', 'usemin']);
};
