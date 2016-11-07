module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                banner: "'use strict';\n"
            },
            js: {
                src: ['./webapp/src/**/*.js'],
                dest: './webapp/bundle.js'
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-concat')

    grunt.registerTask('default', ['concat'])
}
