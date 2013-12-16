module.exports = function(grunt) {
	"use strict";
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			files: ['test/**/*.html']
		},
		jshint: {
			files: ['js/feedbackanswer.js', 'js/globals.js', 'js/showhide.js', 'submitforms.js', 'validationforms.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		csslint: {
			src: ['css/stylesheet.css']
		},
		validation: {
			files: {
				src: ['index.html', 'test/index.html']
			}
		},
		watch: {
			files: [],
			tasks: ['validation','csslint', 'jshint', 'qunit']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html-validation');
	
	grunt.registerTask('default', ['validation','csslint', 'jshint', 'qunit']);
};