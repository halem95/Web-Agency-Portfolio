$(document).ready(function() {

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		nav:true,
		navText: ['<i class="fas fa-angle-left fa-lg" style="color:#fff; margin-right:20px"></i>',
		
		'<i class="fas fa-angle-right fa-lg" style="color:#fff; margin-left:20px"></i>'],
		margin:15,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},            
			960:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});


	$("body").niceScroll({
		cursorcolor:"#ff8b38",
		cursorwidth:"4px",
		cursorborder:false,
		zindex:999999,
		cursorfixedheight: 70,
		smoothscroll: true, 

	});

	
	
	var navHeight = $('nav').innerHeight();
	
	$('body').css('paddingTop', navHeight);
	
	$('nav .search-icon').click(function () {
		
		$(this).children('i').toggleClass('fa-times fa-search');
		
		$('nav form').fadeToggle(500)
		
	});
	
	var passwordInput = $('#home form input[type="password"]');
	
	$('#home form .eye-icon').click(function () {
		
		if (! passwordInput.val() == '') {
			
			$(this).children('i').toggleClass('fa-eye fa-eye-slash');
		
			passwordInput.toggleClass('active-password');
			
			if ( $(passwordInput).hasClass('active-password') ) {
				
				$(passwordInput).attr('type', 'text');
			} else {
				
				$(passwordInput).attr('type','password');
			}
		}
		
		
	});
	
	$(window).scroll(function () {
		
		$('section').each(function () {
			
			if( $(window).scrollTop() >= $(this).offset().top ) {
				
				var secId = '#' + $(this).attr('id');
				
				$('nav .nav-item a').removeClass('active-link');
				
				$('nav .nav-item a[href="' + secId + '"]').addClass('active-link');
				
			}
			
		});
		
	});
	
	
	
	$('nav .nav-item a').click(function () {
	
		
		$('nav .nav-item a').removeClass('active-link');
		
		$(this).addClass('active-link');
		
		var aHref = $(this).attr('href');
		
		$('body , html').animate({
			
			scrollTop: $(aHref).offset().top + 1,
			
		}, 1000);
		
	});
	
	
	$('#about .tabs .tab-item').each(function () {
		
		if ( $(this).hasClass('active-tab') ) {
			
			var activeTabData =  $(this).data('tab');
			
			$('#about article').css('display', 'none');
			
			$('#about article[class="' + activeTabData + '"]').css('display', 'block');
			
		}
		
	});
	
	
	$('#about .tabs .tab-item').click(function () {
		
		
		$('#about .tabs .tab-item').removeClass('active-tab');
		
		$(this).addClass('active-tab');
		
		if( $(this).hasClass('active-tab') ) {
			
			var tabItemData = $(this).data('tab');
			
			$('#about article').slideUp(500);
			
			$('#about article[class="' + $(this).data('tab') + '"]').slideDown(500);
			
			
		}
		
		
	});
	
	var placeHolder = '';
	
	$('input , textarea').each(function () {
		
		$(this).focus(function () {
			
			placeHolder = $(this).attr('placeholder');
			
			$(this).attr('placeholder', '');
			
		});
		
		$(this).blur(function () {
			
			$(this).attr('placeholder', placeHolder);
			
		});
		
	});

	var sublistWidth = $('#sublist .sublist-img').innerWidth(),
		sublistHeight = $('#sublist .sublist-img').innerHeight(),
		portMasterImgWidth = $('#portfolio .port-master-img').innerWidth(),
		portMasterImgHeight = $('#portfolio .port-master-img').innerHeight(),
		zoomWidth = $('#sublist .sublist-img .zoom').innerWidth(),
		zoomHeight = $('#sublist .sublist-img .zoom').innerHeight(),
		zoomPortWidth = $('.port-master-img .zoom').innerWidth(),
		zoomPortHeight = $('.port-master-img .zoom').innerHeight(),
		zoomWidthDiffer = ( sublistWidth - zoomWidth) / 2 + 'px',
		zoomHeightDiffer = ( sublistHeight - zoomHeight ) / 2 + 'px',
		zoomPortWidthDiffer = ( portMasterImgWidth - zoomPortWidth) / 2 + 'px',
		zoomPortHeightDiffer = ( portMasterImgHeight - zoomPortHeight ) / 2 + 'px';

	$('#sublist .sublist-img .zoom').css({
		'top': zoomHeightDiffer,
		'left': zoomWidthDiffer
	});

	$('#portfolio .port-master-img .zoom').css({

		'top': zoomPortHeightDiffer,
		'left': zoomPortWidthDiffer
	});



	$('#sublist .sublist-img .zoom, #portfolio .port-master-img .zoom').click(function () {

		var masterImgSrc = $(this).siblings('img').attr('src');

		$('.gallery .master-img img').attr('src', masterImgSrc);

		$('.gallery').fadeIn(500);

		$('body').css('overflow', 'hidden');

		var windowHeight = $(window).innerHeight(),
		windowWidth = $(window).innerWidth(),
		masterImgHeight = $('.gallery .master-img').innerHeight(),
		masterImgWidth = $('.gallery .master-img').innerWidth(),
		masterImgHeightDiffer = (windowHeight - masterImgHeight) / 2,
		masterImgWidthDiffer = (windowWidth - masterImgWidth) / 2;

		$('.gallery .master-img').css({

			'top': masterImgHeightDiffer,
			'left': masterImgWidthDiffer
		});

		
	});


	$(window).on('resize', function () {

		var windowHeight = $(window).innerHeight(),
		windowWidth = $(window).innerWidth(),
		masterImgHeight = $('.gallery .master-img').innerHeight(),
		masterImgWidth = $('.gallery .master-img').innerWidth(),
		portMasterImgWidth = $('#portfolio .port-master-img').innerWidth(),
		portMasterImgHeight = $('#portfolio .port-master-img').innerHeight(),
		masterImgHeightDiffer = (windowHeight - masterImgHeight) / 2,
		masterImgWidthDiffer = (windowWidth - masterImgWidth) / 2,
		sublistWidth = $('#sublist .sublist-img').innerWidth(),
		sublistHeight = $('#sublist .sublist-img').innerHeight(),
		zoomWidth = $('#sublist .sublist-img .zoom').innerWidth(),
		zoomHeight = $('#sublist .sublist-img .zoom').innerHeight(),
		zoomPortWidth = $('.port-master-img .zoom').innerWidth(),
		zoomPortHeight = $('.port-master-img .zoom').innerHeight(),
		zoomWidthDiffer = ( sublistWidth - zoomWidth) / 2 + 'px',
		zoomHeightDiffer = ( sublistHeight - zoomHeight ) / 2 + 'px',
		zoomPortWidthDiffer = ( portMasterImgWidth - zoomPortWidth) / 2 + 'px',
		zoomPortHeightDiffer = ( portMasterImgHeight - zoomPortHeight ) / 2 + 'px',
		portThumbnailWidth = $('#portfolio .portfolio-gallery .port-thumbnails').innerWidth(),
		portThumbnailLength = $('#portfolio .port-thumbnails img').length,
		totalMargin = 4 * (portThumbnailLength - 1),
		totalWidthAfterMargin = (portThumbnailWidth - totalMargin),
		imgThumbnailWidth = totalWidthAfterMargin / portThumbnailLength,
		navHeight = $('nav').innerHeight();
	
		$('body').css('paddingTop', navHeight);

		$('.port-thumbnails img').css({'max-width': imgThumbnailWidth, 'height': '100%'});

		$('.port-thumbnails img:last').css('marginRight', -4);

		$('#sublist .sublist-img .zoom').css({
			'top': zoomHeightDiffer,
			'left': zoomWidthDiffer
		});

		$('#portfolio .port-master-img .zoom').css({

			'top': zoomPortHeightDiffer,
			'left': zoomPortWidthDiffer
		});

		$('.gallery .master-img').css({

			'top': masterImgHeightDiffer,
			'left': masterImgWidthDiffer
		});

	});

	$('.gallery').click(function () {

		$(this).fadeOut(500);

		$('body').css('overflow', 'auto');

	});


	$('.gallery .master-img').click(function (e) {

		e.stopPropagation();

	});


	$(document).on('keydown', function (e) {

		if( e.keyCode === 27 ) {

			$('.gallery').fadeOut(500);

			$('body').css('overflow', 'auto');
		}

	});


	var portThumbnailWidth = $('#portfolio .portfolio-gallery .port-thumbnails').innerWidth(),
		portThumbnailLength = $('#portfolio .port-thumbnails img').length,
		totalMargin = 4 * (portThumbnailLength - 1),
		totalWidthAfterMargin = (portThumbnailWidth - totalMargin),
		imgThumbnailWidth = totalWidthAfterMargin / portThumbnailLength;

		$('.port-thumbnails img').css({'max-width': imgThumbnailWidth, 'height': '100%'});

		$('.port-thumbnails img:last').css('marginRight', -4);

	
	$('#portfolio .port-thumbnails img').click(function () {

		$('#portfolio .port-thumbnails img').removeClass('active-thumbnail');

		$(this).addClass('active-thumbnail');

		var imgThumbnailSrc = $(this).attr('src')

		$('#portfolio .port-master-img img').fadeOut(200).attr('src', imgThumbnailSrc).fadeIn(200);


	});

	$('#portfolio .right-arrow').click(function () {

		if (! $('#portfolio .port-thumbnails img:last').hasClass('active-thumbnail') ) {

			$('.port-thumbnails .active-thumbnail').next().click();

		} else {

			$('.port-thumbnails img:eq(0)').click();

		}

	});
	
	$('#portfolio .left-arrow').click(function () {

		if (! $('#portfolio .port-thumbnails img:eq(0)').hasClass('active-thumbnail') ) {

			$('#portfolio .port-thumbnails .active-thumbnail').prev().click();

		} else {

			$('#portfolio .port-thumbnails img:last').click();
		}

	});

	var professionalPara = $('#pricing .professional-table .professional-p').innerHeight();

	$('#pricing .enterprise-table , #pricing .basic-table').css('paddingTop', professionalPara);


	var dayOptionValue = '',
		monthOptionValue = '',
		yearOptionValue = '';
	
		(function setDayValue(stratVal, endVal) {

			for (var x = stratVal; x <= endVal ; x++) {

				dayOptionValue += '<option value="' + x + '">' + x + '</option>';

				$('#contact form select[name="day"]').html(dayOptionValue);
			}

		} 
		
		(1, 30));

		(function setMonthValue(stratVal, endVal) {

			for (var y = stratVal; y <= endVal ; y++) {

				monthOptionValue += '<option value="' + y + '">' + y + '</option>';

				$('#contact form select[name="month"]').html(monthOptionValue);
			}

		} 
		
		(1, 12));

		(function setYearValue(stratVal, endVal) {

			for (var z = stratVal; z <= endVal ; z++) {

				yearOptionValue += '<option value="' + z + '">' + z + '</option>';

				$('#contact form select[name="year"]').html(yearOptionValue);
			}

		} 
		
		(1990, 2018));


	var textareaMaxLength = $('#contact form textarea').attr('maxlength');

	$('#contact form .message-output').html('Remaining Characters Are<span>' + textareaMaxLength + '</span> Character');

	$('#contact form textarea').keyup(function () {

		var textareaValueLength = 	$(this).val().length,
			textareaValDiffer = ( textareaMaxLength - textareaValueLength );

		if ( textareaValDiffer > 0 ) {

			$('#contact form .message-output').html('Remaining Characters Are<span>' + textareaValDiffer + '</span> Character');

		} else {

			$('#contact form .message-output').html('There Is No Remainig Characters');

		}


	});


	$(window).scroll(function () {

		if ( $(window).scrollTop() > 1200 ) {

			$('.scrtop').fadeIn(500);

		} else {

			$('.scrtop').fadeOut(500);

		}

	});


	$('.scrtop').click(function () {

		$('body, html').animate({
			scrollTop: 0,

		}, 1000);

	});


});

