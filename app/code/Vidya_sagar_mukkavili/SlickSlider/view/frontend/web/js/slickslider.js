const { noConflict } = require("underscore");

define(
   
    [   
    // "jquery-minified",
    "jquery",
    // "jquery/ui",
    "slick-minified"
    ], 

    function ($){
    'use strict'

    console.log('I went inside : 01')

    return function(){

        console.log('I went inside : 02')

        $('.carousal-wrapper').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false
          });
                  
        console.log('I went inside : 03')

    };


}


);


