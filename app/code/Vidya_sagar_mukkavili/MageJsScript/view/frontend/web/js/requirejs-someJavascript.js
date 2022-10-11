// console.log("Hello I am running some javascript inside the template and it loaded with RequireJS");

define(
   
    ['jquery'],
    
    function($){
    'use strict';

    return function(config, element){

        console.log(element)
        
        console.log('I am a RequireJS an AMD Module function & ');
        console.log('The value from PHP side is - ', config) 

    }


});
