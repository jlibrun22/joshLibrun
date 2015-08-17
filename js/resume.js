require(['libs/avgrund/jquery.avgrund'], function() {

     var current;
/*rotater for the resume page*/
    function rotate() {

        // This seems like a sucky way to do it, but you can't select by classes because they execute in order

        if (current == 1) {
            $("#block-1").removeClass().addClass("active");
            $("#block-1 .resume-content").hide();
            $("#block-2").removeClass().addClass("non-active-top");
            $("#block-3").removeClass().addClass("non-active-middle");
            $("#block-4").removeClass().addClass("non-active-bottom");
        } else if (current == 2) {
            $("#block-1").removeClass().addClass("non-active-bottom");
            $("#block-2").removeClass().addClass("active");
             $("#block-2 .resume-content").hide();
            $("#block-3").removeClass().addClass("non-active-top");
            $("#block-4").removeClass().addClass("non-active-middle");
        } else if (current == 3) {
            $("#block-1").removeClass().addClass("non-active-middle");
            $("#block-2").removeClass().addClass("non-active-bottom");
            $("#block-3").removeClass().addClass("active");
            $("#block-3 .resume-content").hide();
            $("#block-4").removeClass().addClass("non-active-top");
        }
        else {
            $("#block-1").removeClass().addClass("non-active-top");
            $("#block-2").removeClass().addClass("non-active-middle");
            $("#block-3").removeClass().addClass("non-active-bottom");
            $("#block-4").removeClass().addClass("active");
            $("#block-4 .resume-content").hide();
           

        }

        $('.active .resume-content').fadeIn(1200);

    }




 $('body').on('click', '#rotator div', function(event) {
        // Enables reversing, idea via Andrea Canton: https://twitter.com/andreacanton/status/24954634279849985
       // if(!$(event.target).hasClass('active')){

                    current = this.id.substr(6);
                    rotate(); 
        //}

 
    });

$(function() {
        $('#show').avgrund({
            width: 640, // max is 640px
            height: 350, // max is 350px
            holderClass: 'modalDialog',
            showClose: true,
            showCloseText: 'close',
            onBlurContainer: '.container',
            template: '<p>Details coming Soon.</p>'
        });

          $('#show-first-rotation').avgrund({
            width: 640, // max is 640px
            height: 350, // max is 350px
            holderClass: 'modalDialog',
            showClose: true,
            showCloseText: 'close',
            onBlurContainer: '.container',
            template: ' <h2>Customer Growth Initiative/Digital Innovation Group</h2>'
             + '<p>Mobile/Web Analyst and Project Manager for our new digital solutions team at GE Capital Americas</p>'

             + '<p>From vision to completion, participated in design, implementation, and rollout  of SmartChart web app</p>'

            + '<p>Drove solution to capture metrics on iPad usage across GE Capital Americas for approximately 1000 iPad users in order to drive usage</p>' 
        });


            $('#show-second-rotation').avgrund({
            width: 640, // max is 640px
            height: 350, // max is 350px
            holderClass: 'modalDialog',
            showClose: true,
            showCloseText: 'close',
            onBlurContainer: '.container',
            template: ' <h2>Digital Marketing Team</h2>'
             + '<p>Native IOS Developer and Project Manager for GE Captial Retail Finance</p>'

             + '<p>Developed 2 Native IOS Applications to be used internally within GE Capital Retail Finance</p>'

            + '<p>Drove solution to capture metrics on iPad usage across GE Capital Americas for approximately 1000 iPad users in order to drive usage</p>' });


              $('#show-third-and-fourth-rotation').avgrund({
            width: 640, // max is 640px
            height: 350, // max is 350px
            holderClass: 'modalDialog',
            showClose: true,
            showCloseText: 'close',
            onBlurContainer: '.container',
            template: ' <h2> Enterprise Architecture Team - Software Engineering</h2>'
             + '<p>Enterprise Architecture role with GE Capital Americas. </p>'

             + '<p>Developed a variety of Web, Hybrid and Mobile applications from middle tier to front-end.  </p>'

            + '<p>Taught mobile development workshop within GE as well as spoke at technical roadshow</p>'
        });


              $('#show-playspot').avgrund({
            width: 640, // max is 640px
            height: 350, // max is 350px
            holderClass: 'modalDialog',
            showClose: true,
            showCloseText: 'close',
            onBlurContainer: '.container',
            template: '<p>COMING SOON PLAYSPOT INFO</p>' 

        });

            $('#show-dance-events').avgrund({
            width: 640, // max is 640px
            height: 350, // max is 350px
            holderClass: 'modalDialog',
            showClose: true,
            showCloseText: 'close',
            onBlurContainer: '.container',
            template: '<p>COMING SOON DANCE EVENTS INFO</p>' 

        });



    });



});

   