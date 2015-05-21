module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            all: {
                files: {
                    'dist/webforms.save-restore.min.js': ['src/webforms.save-restore.js']
                }
            }
        },
        copy: {
            all: {
                files: [
                    // includes files within path
                    { expand: true, flatten: true, src: ['src/webforms.save-restore.js'], dest: 'dist/', filter: 'isFile' }
                ],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // uglify
    grunt.loadNpmTasks('grunt-contrib-copy'); // copy

    // tasks
    grunt.registerTask('dist', [
        'uglify:all', 'copy:all'
    ]);
};