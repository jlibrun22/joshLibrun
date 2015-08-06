$(document).ready(function() {



    var current;
/*rotater for the resume page*/
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
    var templateArray = ['profile', 'resume', 'brand', 'projects', 'parrallex-test','contact'];

    var tmpl;


    $('#next-button').click(function() {
        if (iterator != templateArray.length - 1) {

            iterator++;

        } else {
            iterator = 0;
        }

        if(iterator < 4){

            nextSlideMini();

        }
        else
        {

         nextSlide();   
        }

    });


    $('#prev-button').click(function() {


          if (iterator > 0 ) {

            iterator--;

        } else {
            iterator = templateArray.length - 1;
        }

        if(iterator < 4){

            prevSlideMini();

        }
        else
        {

         prevSlide(); 
         }  
    });

     var prevSlideMini = function() {

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
        var selector = $('#main-slide').hasClass('slide') ? '.slide' : '.mini-slide';
        $(selector)
            .transition({
                scale: 1
            })
            .transition({
                    x: 1500
                },
                function() {
                    //ensure correct class is ont the slide
                 $('#main-slide').removeClass().addClass('mini-slide');

                    //Move slide from right to center and place template

                    $('.mini-slide')
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
    }



    var prevSlide = function() {


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
        var selector = $('#main-slide').hasClass('slide') ? '.slide' : '.mini-slide';
        $(selector)
            .transition({
                scale: 1
            })
            .transition({
                    x: 4500
                },
                function() {

                    $('#main-slide').removeClass().addClass('slide');
                    //Move slide from left to center and place template

                    $('.slide')
                        .css({
                            x: -1500
                        })
                        .transition({
                            x: 0
                        })
                        .html('' + tmpl);

                });
    }


    var nextSlideMini = function() {

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
        var selector = $('#main-slide').hasClass('slide') ? '.slide' : '.mini-slide';
        $(selector)
            .transition({
                scale: 1
            })
            .transition({
                    x: -4500
                },
                function() {
                    //ensure correct class is ont the slide
                 $('#main-slide').removeClass().addClass('mini-slide');

                    //Move slide from right to center and place template

                    $('.mini-slide')
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



    var nextSlide = function() {


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
        var selector = $('#main-slide').hasClass('slide') ? '.slide' : '.mini-slide';
        $(selector)
            .transition({
                scale: 1
            })
            .transition({
                    x: -1500
                },
                function() {

                    $('#main-slide').removeClass().addClass('slide');
                    //Move slide from left to center and place template

                    $('.slide')
                        .css({
                            x: 1500
                        })
                        .transition({
                            x: 0
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