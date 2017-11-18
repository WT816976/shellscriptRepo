/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    
    grunt.loadNpmTasks('grunt-run-node');
    
    grunt.initConfig({
        run_node: {
        start: {
            options: {
                cwd: 'test',
                stdio: [ 'ignore', 'ignore', 'ignore' ],
                env: {
                    'foo': 'bar'
                },
                detached: true
            },
            files: { src: [ 'main.js'] }
        }
    }
    });
};
