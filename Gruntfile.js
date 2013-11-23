// Generated on 2013-08-11 using generator-webapp 0.2.6
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer' ]
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '<%= yeoman.app %>/partials/*',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['htmlbuild:dev', 'copy:pages', 'clean:tmpPages']
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
                            mountFolder(connect, yeomanConfig.app)
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
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
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
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp',
            pages: '<%= yeoman.dist %>/pages',
            tmpPages: '.tmp/pages'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
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
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        fixturesPath: '<%= yeoman.app %>/partials',
        htmlbuild: {
            dist: {
                src: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/pages/*.html'],
                dest: '<%= yeoman.dist %>/pages',
                options: {
                    relative: true,
                    parseTag: 'htmlbuild',
                    sections: {
                        footer: '<%= fixturesPath %>/footer.html',
                        analytics: '<%= fixturesPath %>/analytics_snippet.html',
                        topNav: '<%= fixturesPath %>/top_nav.html'
                    }
                }
            },
            dev: {
                src: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/pages/*.html'],
                dest: '.tmp/pages',
                options: {
                    relative: true,
                    parseTag: 'htmlbuild',
                    sections: {
                        footer: '<%= fixturesPath %>/footer.html',
                        topNav: '<%= fixturesPath %>/top_nav.html'
                    }
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/{,*/}index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: '<%= yeoman.dist %>/{,*/}*.html',
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
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
                    cwd: '<%= yeoman.app %>',
                    src: '404.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*',
                        'application/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= yeoman.dist %>/pages',
                    dest: '<%= yeoman.dist %>/',
                    src: [
                        '*.html',
                        '!404.html'
                    ],
                    rename: function (dest, src) {
                        if (src === 'index.html') {
                            return dest + 'index.html';
                        } else {
                            var path = src.split('.')[0];
                            return dest + path.replace(/_/g,'/') + '/index.html';
                        }
                    }
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            pages: {
                expand: true,
                cwd: '.tmp/pages',
                dest: '.tmp/',
                src: [
                    '*.html',
                    '!404.html'
                ],
                rename: function (dest, src) {
                    if (src === 'index.html') {
                        return dest + 'index.html';
                    } else {
                        var path = src.split('.')[0];
                        return dest + path.replace(/_/g,'/') + '/index.html';
                    }

                }
            }
        },
        concurrent: {
            server: [
                'compass',
                'copy:styles',
                'copy:pages'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass',
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'htmlbuild:dev',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'open',
            'clean:tmpPages',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'htmlbuild:dist',
        'copy:dist',
        'clean:pages',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
