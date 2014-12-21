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
          verbose: true,
          patterns: [
            {
              match: 'includeHead',
              replacement:  '<%= grunt.file.read("src/include/head.html") %>'
            },
            {
              match: 'includeFoot',
              replacement:  '<%= grunt.file.read("src/include/foot.html") %>'
            },
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['src/html/*.html'], dest: '.'},
          {expand: true, flatten: true, src: ['src/html/lies/*.html'], dest: './lies'},
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-replace')

  // Default task(s).
  grunt.registerTask('default', ['replace'])
}
