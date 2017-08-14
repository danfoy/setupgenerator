/* global module */

module.exports = function(grunt) {

  // Config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        'sourcemap': 'none',
        'style': 'nested',
        'cacheLocation': 'src/style/.sass-cache'
      },
      dist: {
        files: {
          'src/style/main.css': 'src/style/scss/main.scss'
        }
      }
    },

    concat: {
      scripts: {
        src: [
          'src/js/modules/_vue.js',
          'src/js/modules/_app.js'],
        dest: 'src/js/main.js'
      },
      partials: {
        src: [
          'src/partials/_1_header_1.htm',
          'src/style/main.css',
          'src/partials/_2_header_2.htm',
          'src/partials/_3_body_1.htm',
          'src/partials/_4_input_1.htm',
          'src/partials/_5_output_1.htm',
          'src/partials/_6_footer_1.htm',
          'src/js/main.js',
          'src/partials/_7_footer_2.htm'
        ],
        dest: 'dist/setupgenerator.htm'
      }
    },

    watch: {
      sass: {
        files: [
          'src/style/scss/*.scss',
          'src/style/scss/**/*.scss'
        ],
        tasks: ['sass', 'concat:partials']
      },
      scripts: {
        files: ['src/js/modules/*.js'],
        tasks: ['concat:scripts', 'concat:partials']
      },
      partials: {
        files: ['src/partials/*htm'],
        tasks: ['concat:partials']
      }
    }

  });

  // Load
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Run
  grunt.registerTask('default', ['sass', 'concat:scripts', 'concat:partials']);

};
