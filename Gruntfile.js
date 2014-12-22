//
// Build the site
//
// Usage:  grunt
//
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        layout: ['src/templates/page.hbs'],
      },
      files: {
        expand: true,
        cwd: 'src/html',
        src: '**/*.html',
        dest: './',
      },
    },

  })

  grunt.loadNpmTasks('assemble')

  // Default task(s).
  grunt.registerTask('default', ['assemble'])
}
