//
// Build the static site from src
//
// Assemble the html page in /src/pages using handlebar templates
// in /src/templates.  Put the built results in the project root
// for serving by github pages.  Src is public.
//
// Usage:  grunt
//

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        layout: 'src/templates/page.hbs',
      },
      files: {
        expand: true,
        cwd: 'src/pages',
        src: '**/*.html',
        dest: './',
      },
    },

  })

  // http://assemble.io
  grunt.loadNpmTasks('assemble')

  grunt.registerTask('default', ['assemble'])
}
