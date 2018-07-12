$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('a[href="#callback"]').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});

	$("a[href='#callback']").click(function() {
		$("#callback .formname").val($(this).data("form"));
	});

	$(".service-item h4").equalHeights();
	$(".new-item-text").equalHeights();
	$(".link-item").equalHeights();

	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		"extensions": [
			"fx-menu-slide",
			"fx-panels-slide-up",
			"fx-listitems-slide",
			"pagedim-black"
	 ],
		'navbar': {
			'title' : 'MENU'
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function() {
		$("#my-menu").find(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu")	
		.click(function() {
		var mmApi = $("#my-menu").data("mmenu");
		mmApi.open();
		var thiss = $(this).find(".toggle-mnu")
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		speed: 'fast',
		delay: 250
	});

	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: ''
	});

	$('.owl-next-c').on('click', function () {
		owl.trigger('next.owl.carousel', [500]);
});
$('.owl-prev-c').on('click', function () {
		owl.trigger('prev.owl.carousel', [500]);
}); 



const player = new Plyr('#player', {
	controls: [
]
});