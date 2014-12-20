//
// Inject the shared header into all html files
//
// Usage:  grunt
//
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      dist: {
        options: {
          force: true,
          noProcess: 'src/_*',
          patterns: [
            {
              match: 'includeHead',
              replacement:  '<%= grunt.file.read("src/_head.html") %>'
            },
            {
              match: 'includeFoot',
              replacement:  '<%= grunt.file.read("src/_foot.html") %>'
            },
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['src/*.html'], dest: '.'}
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-replace')

  // Default task(s).
  grunt.registerTask('default', ['replace'])
}
