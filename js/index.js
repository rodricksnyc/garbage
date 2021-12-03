$(document).ready(function () {

	var flipThis = function() {
		$(".bigCard").toggleClass('flipped')
	}
	$('.flipIt').keypress(
		flipThis
	).click(
		flipThis
	);


	$("a, button, input, [tabIndex='0']").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0']").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	if ($(document).innerWidth() >= 768) {
		$('.flipIt').on('mouseenter', function() {
			$('.flipIt img').attr('src',"images/flip-hover.svg");
		})


		$('.flipIt').on('mouseleave', function() {
			$('.flipIt img').attr('src',"images/flip.svg");
		})

	}

	var high = $('.whiteBox').height() + 340


	$('.wrapper').css({
		'height' : high
	})

	if ($(document).height() >= 1100 && $(document).innerWidth() >= 1500) {
		var highest = $('.whiteBox').height() + 380
		$('.wrapper').css({
			'height' : highest
		})

	}


	if ($(document).height() >= 1100 && $(document).innerWidth() >= 1200) {
		var more = $('.whiteBox').height() + 380
		$('.wrapper').css({
			'height' : more
		})

	}

	if ($(document).innerWidth() <= 1078) {
		var higher = $('.whiteBox').height() + 290
		$('.wrapper').css({
			'height' : higher
		})

	}


	if ($(document).innerWidth() <= 375) {
		var higher = $('.whiteBox').height() + 275
		$('.wrapper').css({
			'height' : higher
		})

	}

	if ($(document).innerWidth() <= 320) {
		var more = $('.whiteBox').height() + 350
		$('.wrapper').css({
			'height' : more
		})

	}


	if ($(document).innerWidth() <= 767) {
		$('.flipIt img').attr('src', 'images/flip-icon.svg')

		$('.flipIt').click(function() {

			if ($('.bigCard').hasClass('flipped')) {

				$('.flipIt').css({
					'box-shadow' :'0px 0px 20px -2px rgba(0,0,0,0.45)',
					'background' : 'white'
				})
				$('.flipIt img').attr('src', 'images/flip-hover.svg')

			}

			else {

				$('.flipIt').css({
					'box-shadow' :'none',
					'background' : '#007bbc'
				})
				$('.flipIt img').attr('src', 'images/flip-icon.svg')

			}
		})

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.flipIt').css({
					'top' : '62%'
				})
				$('.back-to-top').css({
					'top' : '72%'
				})
			}
			else {

				$('.flipIt').css({
					'top' : '84%'
				})
				$('.back-to-top').css({
					'top' : '94%'
				})

			}

		});


	}



	if ($(document).innerWidth() <= 375) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.flipIt').css({
					'top' : '55.5%'
				})
				$('.back-to-top').css({
					'top' : '66.5%'
				})
			}
			else {

				$('.flipIt').css({
					'top' : '84%'
				})
				$('.back-to-top').css({
					'top' : '94%'
				})

			}

		});

	}


	if ($(document).innerWidth() <= 320) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.flipIt').css({
					'top' : '48%'
				})
				$('.back-to-top').css({
					'top' : '61%'
				})
			}
			else {

				$('.flipIt').css({
					'top' : '84%'
				})
				$('.back-to-top').css({
					'top' : '94%'
				})

			}

		});

	}




	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})



	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) ?
		$('.back-to-top, .flipIt').css({ opacity: 1, visibility: "visible" }) :
		$('.back-to-top, .flipIt').css({ opacity: 0, visibility: "hidden" });


	});

	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');
	}

	$('.customStack input, textarea').keydown(function (event) {
		$('.next').css('background', '#c23294')

	});


	$('.form-check input').change(function () {
		if ($('input').not('#Consent_2').is(':checked')) {

			$('.next').css('background', '#c23294')
		}

		else {
			$('.next').css('background', '#707070')
		}
	})

	$(".form-check").on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$('.form-check').each(function() {
				$(this).addClass('focusClass')
			});

		}

	})


	var height = $('.survey-wrapper').height()

	console.log(height)

	if ($('.survey-wrapper').height() < 300) {
		$('.survey-container').css('min-height', 'calc(100vh - 20rem)')
	}


	//scale logo

	// var resizeImg = function () {
	//
	// 	var preferredFontSize = 89; // %
	// 	var preferredSize = 1024 * 768;
	//
	// 	var currentSize = $(window).width() * $(window).height();
	// 	var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
	// 	var newFontSize = preferredFontSize * scalePercentage + 5;
	// 	$(".surveyPic2").css("width", newFontSize + '%');
	// };
	//
	//
	//
	// $(window).bind('resize', function() {
	// 	resizeImg();
	// }).trigger('resize');


	if ($('span').hasClass('moveBelow')) {
		$('.form-check-label').addClass('moveLabel')
	}

	//switch images and text

	if ($('body').hasClass('ad2')) {
		$("#switchImage").attr('src',"images/2.jpg")
		$("#switchText").html('can follow you into adulthood. Your')
		$('#name').html('Dr. Tina Richardson, M.D., FAAD*')
	}


	if ($('body').hasClass('ad3')) {
		$("#switchImage").attr('src',"images/3.jpg")
		$("#switchText").html('followed me into adulthood. My')
		$('#name').html('Tina Richardson, Graphic Designer*')
	}

	//switch instagram

	if ($('body').hasClass('gram2')) {
		$("#switchAvatar").attr('src',"images/face2.jpg")
		$("#switchGram").attr('src',"images/gram2.jpg")
		$("#switchParagraph").html("I found out I had endometriosis when I was 21. Endometriosis has beenone of the hardest things I’ve dealt with physically. If there were a pill I could take to help me manage my symptoms, I would try it. Well, I recently heard about this prescription medicine called Cerenys (cerozole 2.5 mg tablets). Cerenys is a pill you take once a day. It’s proven to relieve pain caused by endometriosis, including painful periods, pelvic pain in between periods, and pain with sex. If you struggle with endometriosis pain, ask your doctor if Cerenys is right for you. Don’t take Cerenys if you are pregnant or trying to become pregnant. The most serious side effects of Cerenys are bone loss, bone fractures, and high cholesterol levels. Common side effects include nausea, hot flashes, joint pain, headache, dizziness, and muscle pain.")
		$('.username').html('evakatalin26')
		$('#hashtag').html('#sponsored')
	}



})
