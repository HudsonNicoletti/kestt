module.exports = function(grunt){
    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    style: 'compressed'   // nested, compact, compressed, expanded.
                },
                files: {
                    './assets/stylesheets/main.css': './assets/stylesheets/sass/main.sass',
                }
            }
        },

        postcss: {
          options: {
            map: true,
            processors: [
              require('autoprefixer-core')({
                browsers: ['last 2 versions']
              })
            ]
          },
          dist: {
            src: './assets/stylesheets/*.css'
          }
        },

        rucksack: {
          compile: {
            files: {
              './assets/stylesheets/main.css': './assets/stylesheets/main.css'
            }
          }
        },

        watch: {
          sass:
          {
            files: ['./**/*.sass'],
            tasks: ['sass','postcss:dist','rucksack'],
            options: {
              livereload: true,
            }
          }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-rucksack');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-asset-cachebuster');
    grunt.registerTask('default', ['watch'])
}
