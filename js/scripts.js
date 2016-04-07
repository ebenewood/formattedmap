var qArray = ['portland, northeast, pizza'];

$(function () {

	// $('div.hid').append('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=' +
	// qArray[0] +
	// '&key=AIzaSyC-u-zGtcSYGbK84Yxq9a_cY76NyKvHoVs" allowfullscreen></iframe>');


	$('#search').click(function (event) {
		event.preventDefault();

		$('.footer').fadeOut(500);
		$('.jumbotron').fadeOut(1000);
		$('.hid').delay(1000).slideDown(1000);
		// $('.footer').delay(1500).fadeIn(500);
	});

 $('button#n').mouseenter(function (event) {
	 event.preventDefault();

	 $('div.hoverword').empty();
	 $('div.hoverword').append('<h3>north</h3>').fadeIn(500);
 })

 .mouseleave(function (event) {
	 event.preventDefault();

 	 $('div.hoverword').fadeOut(500);
});

$('.btn').click(function (event) {
	event.preventDefault();

		if ($(this).css('backgroud') != "rgb(121, 204, 94) none repeat scroll 0% 0% / auto padding-box border-box") {
			$(this).css('background', '#79CC5E');
		} else {
			($(this).css('background', '#FFFFFF'));
		};
});

 $('.reset').click(function (event) {
	 event.preventDefault();

	 $('.hid').delay(500).slideUp();
	 $('.footer').fadeOut(1000)
	 $('.jumbotron').delay(1500).fadeIn(1000);
	 $('.footer').delay(2000).fadeIn(1000)
	});
});
