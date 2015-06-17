$(document).ready(function(){



$('#test-button').click(function(){

$('.slide')
        .css({ x: 1500 })
        .transition({ x: 0 })
        .transition({ scale: 10 })
        .html('Is this working????');

})

});
