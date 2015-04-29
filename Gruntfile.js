module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mustache: {
      files : {
        src: 'tpl/*.mustache',
        dest: 'templates.js',
        options: {
          prefix: 'var templ = ',
          postfix: ';'
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-mustache');

  // Default task(s).
  grunt.registerTask('default', ['mustache']);

};