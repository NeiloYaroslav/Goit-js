/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

$(function(){
    
    
    var contact = {
        name: 'Yaroslav',
        lastName: 'Neilo',
        dataBirthday: '27.08.1989',
        tel: '+380957300734',
        email: 'neiloyv@gmail.com',
        skype: 'neilo_yaroslav',
        linkedin: 'https://ua.linkedin.com/in/neiloYaroslav',
        git: 'https://github.com/NeiloYaroslav'
    };
    
    var objective = {
        title: 'Looking for a Junior Front end developer position.',
        text: 'My goal for position Front end developer is to realize engineering resource in the markup by HTML/CSS and programming by JavaScript to become a highly qualified specialist in this direction.'
    };
    
    var summary = {
        text: 'I am a building engineer and my basic desire is to create beautiful and useful things. From the idea to the full realization of the overall structure to the smallest detail in a separate module - this attracts me. My desire is to make the product simple, convenient and high qualitative. I`ve chosen the direction of a front-end development, because of its immediately obvious results of the work I do, great prospects for self-development and the opportunity to realize my projects.'
    };
    
    var techSkills = [
        'HTML5',
        'CSS3',
        'Adaptive design', 
        'Methodologies: BEM',
        'Photoshop for coder',
        'GIT',
        'JS, jQuery',
        'AJAX',
        'Prototyping in Javascript',
        'creating classes',
        'Integrating and creating own jQuery-plugins',
        'Experience with LocalStorage',
        'Microtemplating on UI',
        'Command line on basic level',
        'Node.JS on basic level',
        'working with NPM',
        'Build tools: Grunt, Gulp, ES6, Babel, JS, AMD'
    ];
        
    var projects = [
        'https://NeiloYaroslav.github.io/pingbuller',
        'https://NeiloYaroslav.github.io/zazor',
        'http://neiloyaroslav.github.io/JQuery/'
    ];

    var workExperience = [
        {
            year: '2016',
            work: 'html/css design from psd-makets'
        },
        
        {
            year: '2011-2016',
            company: 'Giprotrans',
            position: 'engineer',
            responsibility: 'development project organization of building process'
        }
    ];
    
    var education = {
        year: '2006-2011',
        university: 'National Transport University, Bridges and tunnels building, magister'
    };
    
    var additionalEducation = [
        {
            year: '2016',
            educational: 'GoIT - Frontend developer'
        },
        
        {
            year: '2015',
            educational: 'SkillUp - QA engineer'
        }
    ];
    
    var language = [
        'English - intermadiate',
        'Ukrainian',
        'Russian'
    ];
    
    var $resume = $('#resume').html();
    
    var content = tmpl($resume, contact);
    
    $('.header').after(content);
    
    
    
    
    
    
    
    
    
    
});
