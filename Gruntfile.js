// Generated on 2013-09-03 using generator-ember 0.6.2
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var projectConfig = {
        dev: 'app',
        release: 'release'
    };

    grunt.initConfig({
        project: projectConfig,
        watch: {
            emberTemplates: {
                files: '<%= project.dev %>src/templates/**/*.hbs',
                tasks: ['emberTemplates']
            },
            coffee: {
                files: ['<%= project.dev %>/src/{,*/}*.coffee'],
                tasks: ['coffee:release']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= project.dev %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            neuter: {
                files: ['<%= project.dev %>/src/{,*/}*.js'],
                tasks: ['neuter']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '.tmp/src/*.js',
                    '<%= project.dev %>/*.html',
                    '{.tmp,<%= project.dev %>}/styles/{,*/}*.css',
                    '<%= project.dev %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, projectConfig.dev)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            release: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, projectConfig.release)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            release: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= project.release %>/*',
                        '!<%= project.release %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= project.dev %>/src/{,*/}*.js',
                '!<%= project.dev %>/src/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= project.dev %>/src',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/src',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                require: 'zurb-foundation',
                sassDir: '<%= project.dev %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= project.dev %>/images',
                javascriptsDir: '<%= project.dev %>/src',
                fontsDir: '<%= project.dev %>/styles/fonts',
                importPath: 'app/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            release: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            release: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            release: {}
        },*/
        rev: {
            release: {
                files: {
                    src: [
                        '<%= project.release %>/src/{,*/}*.js',
                        '<%= project.release %>/styles/{,*/}*.css',
                        '<%= project.release %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= project.release %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= project.dev %>/index.html',
            options: {
                dest: '<%= project.release %>'
            }
        },
        usemin: {
            html: ['<%= project.release %>/{,*/}*.html'],
            css: ['<%= project.release %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= project.release %>']
            }
        },
        imagemin: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= project.dev %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= project.release %>/images'
                }]
            }
        },
        svgmin: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= project.dev %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= project.release %>/images'
                }]
            }
        },
        cssmin: {
            release: {
                files: {
                    '<%= project.release %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= project.dev %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            release: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/project/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= project.dev %>',
                    src: '*.html',
                    dest: '<%= project.release %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            release: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= project.dev %>',
                    dest: '<%= project.release %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'emberTemplates',
                'coffee:release',
                'compass:server'
            ],
            test: [
                'emberTemplates',
                'coffee',
                'compass'
            ],
            release: [
                'emberTemplates',
                'coffee',
                'compass:release',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        emberTemplates: {
            options: {
                templateName: function (sourceFile) {
                    var templatePath = projectConfig.dev + 'src/templates/';
                    return sourceFile.replace(templatePath, '');
                }
            },
            release: {
                files: {
                    '.tmp/src/compiled-templates.js': '<%= project.dev %>src/templates/{,*/}*.hbs'
                }
            }
        },
        neuter: {
            app: {
                options: {
                    filepathTransform: function (filepath) {
                        return 'app/' + filepath;
                    }
                },
                src: '<%= project.dev %>/src/app.js',
                dest: '.tmp/src/combined-scripts.js'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'release') {
            return grunt.task.run(['build', 'open', 'connect:release:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'neuter:app',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'neuter:app',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:release',
        'useminPrepare',
        'concurrent:release',
        'neuter:app',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
