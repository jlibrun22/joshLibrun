    require(['libs/stellar/src/jquery.stellar'], function() {

    $.stellar({
        scrollProperty: 'scroll',
        horizontalScrolling: false,
        positionProperty: 'position',
        responsive: true,
        verticalOffset: 40
       }).stellar('refresh');

    });
