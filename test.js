$(document).ready(function() {



    var current;

    function rotate() {

        // This seems like a sucky way to do it, but you can't select by classes because they execute in order

        if (current == 1) {
            $("#block-1").removeClass().addClass("active");
            $("#block-2").removeClass().addClass("non-active-top");
            $("#block-3").removeClass().addClass("non-active-middle");
            $("#block-4").removeClass().addClass("non-active-bottom");
        } else if (current == 2) {
            $("#block-1").removeClass().addClass("non-active-bottom");
            $("#block-2").removeClass().addClass("active");
            $("#block-3").removeClass().addClass("non-active-top");
            $("#block-4").removeClass().addClass("non-active-middle");
        } else if (current == 3) {
            $("#block-1").removeClass().addClass("non-active-middle");
            $("#block-2").removeClass().addClass("non-active-bottom");
            $("#block-3").removeClass().addClass("active");
            $("#block-4").removeClass().addClass("non-active-top");
        }
        else {
            $("#block-1").removeClass().addClass("non-active-top");
            $("#block-2").removeClass().addClass("non-active-middle");
            $("#block-3").removeClass().addClass("non-active-bottom");
            $("#block-4").removeClass().addClass("active");
           

        }

    }



    var iterator = -1;
    //I should make this an object of template name THEN json object of event handlers
    var templateArray = ['profile', 'resume', 'brand', 'projects'];

    var tmpl;


    $('#next-button').click(function() {


        nextSlide();

    });


    $('#prev-button').click(function() {


        prevSlide();

    });


    var prevSlide = function() {


        if (iterator != 0 && iterator != -1) {
            iterator--;
        } else {
            iterator = templateArray.length - 1;
        }

        //Move slide off the screen

        $('.slide')
            .transition({
                scale: 1
            })
            .transition({
                    x: 1500
                },
                function() {

                    //Move slide from left to center and place template

                    $('.slide')
                        .css({
                            x: -1500
                        })
                        .transition({
                            x: 0
                        })
                        .transition({
                            scale: 9
                        })
                        .html('' + tmpl);

                });


        //Get slide template

        var slideTemplate = templateArray[iterator];

        $.ajax({
            url: 'templates/' + slideTemplate + '.html',
            type: 'get',
            async: false,
            success: function(html) {
                tmpl = html;
            }
        });



    }




    var nextSlide = function() {

        if (iterator != templateArray.length - 1) {

            iterator++;

        } else {
            iterator = 0;
        }


        //Get html for next slide
        var slideTemplate = templateArray[iterator];

        $.ajax({
            url: 'templates/' + slideTemplate + '.html',
            type: 'get',
            async: false,
            success: function(html) {
                tmpl = html;
            }
        });


        //Move slide off the screen

        $('.slide')
            .transition({
                scale: 1
            })
            .transition({
                    x: -1500
                },
                function() {

                    //Move slide from right to left

                    $('.slide')
                        .css({
                            x: 1500
                        })
                        .transition({
                            x: 0
                        })
                        .transition({
                            scale: 9
                        })
                        .html('' + tmpl);

                });
    }


    /*Rotationg Blocks test*/
    var rotateBlocks = function(newActive) {

        $("#resume").find(".active-block").removeClass('move-center').addClass('move-away');
        $(newActive).removeClass("move-away").addClass('move-center');

    }


    //$('body').on('click','#resume section',rotateBlocks());
    /*$('body').on('click','#resume section',function(event){
        var el = ($(event.target).is('section'))? event.target : event.target.parentElement;
       if($(el).hasClass('inactive-block') ){

        rotateBlocks(el);
       }
        
    });*/


    $('body').on('click', '#rotator div', function(event) {
        // Enables reversing, idea via Andrea Canton: https://twitter.com/andreacanton/status/24954634279849985
        current = this.id.substr(6);
        rotate();
    });




});