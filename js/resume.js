 
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
        current = this.id.substr(6);
        rotate();
    });
