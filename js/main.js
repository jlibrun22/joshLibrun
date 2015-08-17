
// RequireJS configuration
require.config({
    baseUrl: 'js',
    paths: {
        //paths
        jquery : 'libs/jquery/jquery-1.11.3.min',
        'jquery-transit' : 'libs/jquery.transit/jquery.transit',
        libs: 'libs',
        bootstrap: 'libs/bootstrap/js/bootstrap' 

    },
    shim: {
        'jquery-transit': {
            deps: [ 'jquery']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }

});



// bootstrap the application
require([
    'jquery',
    'jquery-transit',
    'bootstrap'
], function () {

    var iterator = -1;
    //I should make this an object of template name THEN json object of event handlers
    var templateArray = ['profile', 'resume', 'brand', 'projects', /*'parrallex-test','skrollr-test',*/'contact'];

    var tmpl;


    $('#next-button').click(function() {
        if (iterator != templateArray.length - 1) {

            iterator++;

        } else {
            iterator = 0;
        }

        if(iterator < 3){

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

        if(iterator < 3){

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
            async: true,
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
                            scale: 9,
                            complete: function() { 

                 loadJS(slideTemplate);
                 }
                        })
                        .html('' + tmpl);

                });
            //   loadJS(slideTemplate);
    }



    var prevSlide = function() {


        //Get html for next slide
        var slideTemplate = templateArray[iterator];

        $.ajax({
            url: 'templates/' + slideTemplate + '.html',
            type: 'get',
            async: true,
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
                            x: 0,
                        complete: function() { 

                 loadJS(slideTemplate);
                 }
                        })
                        .html('' + tmpl);

                });
             //  loadJS(slideTemplate);
    }


    var nextSlideMini = function() {

        //Get html for next slide
        var slideTemplate = templateArray[iterator];

        $.ajax({
            url: 'templates/' + slideTemplate + '.html',
            type: 'get',
            async: true,
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
                            scale: 9,
                            complete: function() { 

                 loadJS(slideTemplate);
                 }
                        })
                        .html('' + tmpl);

                });
       
      // loadJS(slideTemplate);
    }



    var nextSlide = function() {


        //Get html for next slide
        var slideTemplate = templateArray[iterator];

        $.ajax({
            url: 'templates/' + slideTemplate + '.html',
            type: 'get',
            async: true,
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
                            x: 0,
                              complete: function() { 

                 loadJS(slideTemplate);
                 }
                        })
                        .html('' + tmpl);

                });

           // loadJS(slideTemplate);
    }


    /*Rotationg Blocks test*/
    var rotateBlocks = function(newActive) {

        $("#resume").find(".active-block").removeClass('move-center').addClass('move-away');
        $(newActive).removeClass("move-away").addClass('move-center');

    }

    var loadJS = function(fileName){
         var path = fileName;
        require([path], function (js) {
    //js is now loaded.
        });
       

}

});
