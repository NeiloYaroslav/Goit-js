// Project configuration.
grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js',
    },
  },
    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat']);
});


module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // Настройка для объединения файлов находится тут
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.js',
            }
        }
    });
    // Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat']);
};