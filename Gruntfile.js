module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'demo.html',
              'loading-spinner.html',
              'loading-spinner.css'
          ]
      }
    },
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9000,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve',['connect','watch']);
};
