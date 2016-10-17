/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    
    postcssOptions: {
      filter: {
        enabled: false
      },
      compile: {
        enabled: true,
        plugins: [
          {
            module: require('postcss-cssnext')
          }, {
            module: require('cssnano')
          }, {
            module: require('postcss-opacity')
          }, {
            module: require('postcss-nested')
          }, {
            module: require('postcss-clearfix')
          }, {
            module: require('css-mqpacker')
          }, {
			module: require('postcss-csscomb')
		  }, {
            module: require('rucksack-css')
          }
        ]
      }
    },
    outputPaths: {
		app: {
		  html: 'index.html',
		  css: {
			'app': '/assets/app.css'
		  }
		}
	}
    
  });

  return app.toTree();
};
