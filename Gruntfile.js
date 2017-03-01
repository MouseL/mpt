'use strict';

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  // Configurable paths
  var config = {
      app: '',
      dist: 'dist',
      v: 'v=1.0.2.2'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'app.js'
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/global.css': 'public/css/global.scss'
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      server: {
        files: [
          'bin/www',
          'app.js',
          'routes/*.js'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      js: {
        files: ['public/js/*.js'],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: [
          'public/css/*.scss'
        ],
        tasks: ['sass'],
        options: {
          livereload: reloadPort
        }
      },
      views: {
        files: ['views/*.ejs'],
        options: {
          livereload: reloadPort
        }
      }
    },


    clean: {
        dist: {
            files: [{
                dot: true,
                src: [ config.dist + '/*' ]
            }]
        },
    },
    copy: {
        dist: {
            files: [
            {
                  expand: true,
                  dot: true,
                  cwd: config.app,
                  dest: config.dist ,
                  src: ['*.{ico,png,txt,js}', 'public/**/*.*', 'app/{,*/}*.*', 'views/{,*/}*.*', 'routes/{,*/}*.*', '!public/css/**/*.*', '!public/js/*.js']
              }
            ]
        }
    },

    cssmin: {
      dist: {
        files: [{
                expand: true,
                cwd: config.app + 'public/',
                src: '{,*/}*.css',
                dest: config.dist + '/public/'
            }]
      }
    },

    uglify: {
      dist: {
            options: {
                mangle: true,
                sourceMap: false
            },
            files: [{
                expand: true,
                cwd: config.app + 'public/js/',
                src: '*.js',
                dest: config.dist + '/public/js/',
                ext: '.js'
            }]
        }
    },


    requirejs: {
          dist: {
            options: {
              baseUrl: config.app +  'public/js/',
              mainConfigFile: config.app +  'public/js/global.js',
              name: 'global',
              out: config.dist + "/public/js/global.js",
              paths: 
              {
                  mobilebone: 'vendor/mobilebone',
                  zepto : 'vendor/zepto',
                  template: 'vendor/template',
                  socket: 'vendor/socket.io',
                  qrcode: 'vendor/qrcode',
                  xdate: 'vendor/xdate',
                  url: 'vendor/url',
                  lrz: 'vendor/lrz',
                  jic: 'vendor/jic',
                  popup: 'vendor/popup',

                  global: 'global',
              },
              shim:
              {
                  popup:
                  {
                      deps: ['zepto'],
                      exports: 'popup'
                  },
                  global:
                  {
                      deps: []
                  }
              }
            }
          }
        },

    htmlmin: {
      dist: {
          options: {
              collapseBooleanAttributes: true,
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeAttributeQuotes: true,
              removeCommentsFromCDATA: true,
              removeEmptyAttributes: false,
              removeOptionalTags: true,
              // true would impact styles with attribute selectors
              removeRedundantAttributes: false,
              useShortDoctype: true
          },
          files: [{
              expand: true,
              cwd: config.app + 'views',
              src: '*.ejs',
              dest: config.dist + '/views/',
              ext: '.ejs'
          }]
      }
  },

  replace: {
    dist: {
      options: {
        patterns: [
          {
            match: 'vv',
            replacement: config.v
          }
        ]
      },
      files: 
      [
          {
              expand: true,
              cwd: config.dist + '/views',
              src: '**/*.ejs',
              dest: config.dist + '/views',
              ext: '.ejs'
          },
          {
              expand: true,
              cwd: config.dist + '/public/js',
              src: '**/*.js',
              dest: config.dist + '/public/js',
              ext: '.js'
          }
      ]
    }
  },


  });

  grunt.config.requires('watch.server.files');
  files = grunt.config('watch.server.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','),  function (err, res) {
          var reloaded = !err && res.statusCode === 200;
          if (reloaded) {
            grunt.log.ok('Delayed live reload successful.');
          } else {
            grunt.log.error('Unable to make a delayed live reload.');
          }
          done(reloaded);
        });
    }, 500);
  });

  grunt.registerTask('default', [
    'sass',
    'develop',
    'watch'
  ]);


  // grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', [ 'clean:dist', 'copy:dist', 'cssmin:dist','uglify:dist', 'requirejs:dist', 'htmlmin:dist', 'replace:dist']);
};
