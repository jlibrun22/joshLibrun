
// RequireJS configuration
require.config({
    baseUrl: 'js',
    paths: {
        //paths
        jquery : 'libs/jquery/jquery-1.11.3.min',
        'jquery-transit' : 'libs/jquery.transit/jquery.transit',
        'fly-sideMenu' : 'libs/fly-sideMenu/jquery.fly_sidemenu',
        libs: 'libs',
        bootstrap: 'libs/bootstrap/js/bootstrap' 

    },
    shim: {
        'jquery-transit': {
            deps: [ 'jquery']
        },
        'fly-sideMenu': {
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
    'bootstrap',
    'fly-sideMenu',
    'Router'
], function () {

    var iterator = -1;
    //I should make this an object of template name THEN json object of event handlers
    var templateArray = ['profile', 'resume', /*'brand',*/ 'projects', /*'parrallex-test','skrollr-test',*/'contact'];

    var tmpl;


    $('#next-button').click(function() {
            if (iterator != templateArray.length - 1) {

                iterator++;

            } else {
                iterator = 0;
            }

            if(iterator < 3){

               
                document.location.hash = templateArray[iterator] + '?size=mini&&direction=next';


            }
            else
            {

         
            document.location.hash = templateArray[iterator] + '?size=full&&direction=next';


            }

    });


    $('#prev-button').click(function() {


          if (iterator > 0 ) {

            iterator--;

        } else {
            iterator = templateArray.length - 1;
        }

        if(iterator < 3){

            
            document.location.hash = templateArray[iterator] + '?size=mini&&direction=prev';

        }
        else
        {

         
        document.location.hash = templateArray[iterator] + '?size=full&&direction=prev';

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

function changeView(size, direction){

    if (direction == 'prev'){

        if(size == 'full'){

                   prevSlide();

        }
        else{


             prevSlideMini();
        }
      }
      else {

      if(size== 'full'){

              nextSlide();
        }

        else {
            nextSlideMini();

          
        }

    }
}

 $(".sidemenu").fly_sidemenu({
    btnContent: "=", // This option let you define what appears inside the side menu button. You can add your custom icon here. This option accepts all HTML tags. The default value is "=" string.
    position: "left", // This option will let you define where the sidebar will appear on the page. Available options are "top", "left", "right", "bottom". The default value is "left"
    customSelector: "li", // In case you do not want to use lists, simply define your own css selector here. The default value is "li".
    hideButton: false // You can disable the auto creation of toggle button by changing this to true. The default value is false.
  });

// configuration
var r = Rlite();

// Default route
r.add('', function () {

  console.log('we are home');

      console.log('default');

            iterator = 0;
      

            changeView();
});


// #sent?to=john -> r.params.to will equal 'john'
r.add('profile', function (r) {
    console.log('called profile')
    iterator = templateArray.indexOf('profile');

    changeView(r.params.size, r.params.direction);
});

r.add('resume', function (r) {
    console.log('called resume')
    iterator = templateArray.indexOf('resume');

    changeView(r.params.size, r.params.direction);
});

// #sent?to=john -> r.params.to will equal 'john'
r.add('brand', function (r) {
    console.log('called brand')
    iterator = templateArray.indexOf('brand');

    changeView(r.params.size, r.params.direction);
});
// #sent?to=john -> r.params.to will equal 'john'
r.add('projects', function (r) {
    console.log('called projects')
    iterator = templateArray.indexOf('projects');

    changeView(r.params.size, r.params.direction);
});
// #sent?to=john -> r.params.to will equal 'john'
r.add('contact', function (r) {
    console.log('called contact')
    iterator = templateArray.indexOf('contact');

    changeView(r.params.size, r.params.direction);
});


// Hash-based routing
function processHash() {
  var hash = location.hash || '#';
  r.run(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();

});
