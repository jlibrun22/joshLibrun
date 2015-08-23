require([], function() {

	 $('#campaign-more').click(function(){
        $('.campaign.modal').modal('setting', 'transition', 'fade')
        .modal('show');
    });
	  $('#prospect-more').click(function(){
        $('.prospect.modal').modal('setting', 'transition', 'scale')
        .modal('show');
    });
	   $('#tradeshow-more').click(function(){
        $('.tradeshow.modal').modal('setting', 'transition', 'fade up')
        .modal('show');
    });
	    $('#fleet-optimizer-more').click(function(){
        $('.fleet-optimizer.modal').modal('setting', 'transition', 'horizontal flip')
        .modal('show');
    });

 	$('#playspot-more').click(function(){
        $('.playspot.modal').modal('setting', 'transition', 'vertical flip')
        .modal('show');
    });
});