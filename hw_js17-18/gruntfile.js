// Project configuration.
module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // Настройка для объединения файлов находится тут
            options: {
                separator: '',
            },
            js: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.js',
            },
            css: {
                src: ['css/src/*.css'],
                dest: 'css/dist/style.main.css',
            }
        },
        uglify: {
            dist: {
                src: 'js/dist/script.main.js',
                dest: 'js/dist/script.main.min.js'
            }  
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/dist',
                    src: ['style.main.css', '!*.min.css'],
                    dest: 'css/dist',
                    ext: '.min.css'
                }]
            }
        }
    });
    // Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    // Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};