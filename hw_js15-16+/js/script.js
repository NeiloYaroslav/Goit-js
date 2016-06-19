/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;$(function(){
    'use strict';

    function Human(){
        this.name = 'Name';
        this.age = 18;
        this.gender = 'man';
        this.height = 170;
        this.weight = 65;
    }
    
    function Worker(){
        this.job = 'GoIT';
        this.wage = 1000;
        this.worker = function(){
            alert('I am working');  
        };
    }
    
    function Student(){
        this.university = 'National Transport University';
        this.stipend = 50;
        this.watch = function(){
            alert('I am watching TV');  
        };
    }
    
    Worker.prototype = new Human();
    Student.prototype = new Human();
    
    var WorkerYaroslav = new Worker();
    
    WorkerYaroslav.name = 'Yaroslav';
    WorkerYaroslav.age = 26;
    WorkerYaroslav.gender = 'man';
    WorkerYaroslav.height = 185;
    WorkerYaroslav.weight = 80;
    WorkerYaroslav.job = 'GoIT';
    WorkerYaroslav.wage = 1000;
    WorkerYaroslav.worker = function(){
        alert('I am working');  
    };
    
    console.log('WorkerYaroslav', WorkerYaroslav);
    
     var WorkerRoman = new Worker();
    
    WorkerRoman.name = 'Roman';
    WorkerRoman.age = 28;
    WorkerRoman.gender = 'man';
    WorkerRoman.height = 175;
    WorkerRoman.weight = 75;
    WorkerRoman.job = 'Luxesoft';
    WorkerRoman.wage = 2000;
    WorkerRoman.worker = function(){
        alert('I am working');  
    };
    
    console.log('WorkerRoman', WorkerRoman);
    
    var StudentYaroslav = new Student();
    
    StudentYaroslav.name = 'Yaroslav';
    StudentYaroslav.age = 26;
    StudentYaroslav.gender = 'man';
    StudentYaroslav.height = 185;
    StudentYaroslav.weight = 80;
    StudentYaroslav.university = 'National Transport University';
    StudentYaroslav.stipend = 50;
    StudentYaroslav.watch = function(){
        alert('I am watching TV');  
    };
    
    console.log('StudentYaroslav', StudentYaroslav);
    
    var StudentRoman = new Student();
    
    StudentRoman.name = 'Roman';
    StudentRoman.age = 28;
    StudentRoman.gender = 'man';
    StudentRoman.height = 175;
    StudentRoman.weight = 75;
    StudentRoman.university = 'KPI';
    StudentRoman.stipend = 70;
    StudentRoman.watch = function(){
        alert('I am watching TV');  
    };
    
    console.log('StudentRoman', StudentRoman);
    
});


