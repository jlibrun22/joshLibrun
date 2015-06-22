$(document).ready(function(){

var iterator = 0;

var templateArray = ['profile','resume','brand'];

var tmpl;


$('#next-button').click(function(){


nextSlide();

});


$('#prev-button').click(function(){


prevSlide();

});


var prevSlide =  function(){


if(iterator != 0){
   iterator--;  
} else {
iterator = templateArray.length-1;
}

//Move slide off the screen

$('.slide')
        .transition({ scale: 1 })
        .transition({ x: 1500 },
            function(){

//Move slide from left to center and place template

$('.slide')
        .css({ x: -1500 })
        .transition({ x: 0 })
        .transition({ scale: 9 })
        .html('' + tmpl);

 } );


//Get slide template

var slideTemplate = templateArray[iterator];

$.ajax({
    url: 'templates/'+slideTemplate+'.html',
    type: 'get',
    async: false,
    success: function(html) {
        tmpl = html;
    }
});



}





var nextSlide =  function(){

        if(iterator!=templateArray.length-1){
        
        iterator ++;

        } else {
        iterator = 0;
        }


//Get html for next slide
var slideTemplate= templateArray[iterator];

$.ajax({
    url: 'templates/'+slideTemplate+'.html',
    type: 'get',
    async: false,
    success: function(html) {
        tmpl = html;
    }
});


//Move slide off the screen

$('.slide')
        .transition({ scale: 1 })
        .transition({ x: -1500 },
            function(){

//Move slide from right to left

$('.slide')
        .css({ x: 1500 })
        .transition({ x: 0 })
        .transition({ scale: 9 })
        .html('' + tmpl);

            });
       

    
}

});
