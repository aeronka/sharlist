module.exports = function(grunt) {

    grunt.initConfig({
        mustache: {
            main: {
                src: 'tpl/*.mustache',
                dest: 'templates.js',
                options: {
                    prefix: 'var templ = ',
                    postfix: ';'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-mustache');
};