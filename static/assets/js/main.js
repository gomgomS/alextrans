 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


	$('#book_pick_date,#book_off_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#time_pick').timepicker();

  // Armada filter (car.html)
  (function armadaFilter(){
    var $select = $('#filterSelect');
    var $tabs = $('#filterTabs .nav-link');
    var $desc = $('#serviceDescription');
    var descByFilter = {
      all: ''
        + '<h4 class="mb-2">Layanan Kami</h4>'
        + '<p class="lead mb-2">Pilih kategori layanan pada dropdown untuk menampilkan armada yang sesuai. Kami siap melayani kebutuhan perjalanan pribadi, keluarga, kantor, hingga rombongan besar dengan standar kenyamanan, keamanan, dan ketepatan waktu.</p>'
        + '<p class="mb-0">Contoh untuk <strong>City Tour Bandung</strong>: rute fleksibel Dago – Lembang – Farmhouse – The Great Asia Africa – Braga/Asia Afrika – Punclut – wisata kuliner lokal. Tersedia juga <strong>Rental Mobil</strong> harian/bulanan, <strong>Drop Bandara</strong> (Husein/Jakarta), hingga <strong>Sewa Big Bus</strong> untuk study tour dan outing perusahaan.</p>',
      rental: ''
        + '<h4 class="mb-2">Rental Mobil</h4>'
        + '<p class="lead mb-2">Sewa mobil harian/bulanan dengan armada terawat dan sopir profesional. Cocok untuk perjalanan dinas, kunjungan keluarga, tamu perusahaan, maupun kebutuhan operasional di Bandung & sekitarnya.</p>'
        + '<p class="mb-0">Termasuk layanan pengemudi berpengalaman, opsi penjemputan jemput-antar, durasi fleksibel, dan harga transparan. Unit populer: Avanza/Ertiga, Xpander, Innova Zenix, Alphard, Fortuner.</p>',
      citytour: ''
        + '<h4 class="mb-2">City Tour Bandung</h4>'
        + '<p class="lead mb-2">Nikmati paket wisata Bandung untuk kantor, keluarga, atau rombongan. Rute fleksibel disesuaikan preferensi Anda—tim kami bantu menyusun itinerary terbaik.</p>'
        + '<p class="mb-0">Rekomendasi destinasi: Dago, Lembang (Farmhouse, Floating Market), The Great Asia Africa, kawasan heritage Braga/Asia Afrika, Punclut, dan wisata kuliner lokal. Bebas atur titik jemput/antar, serta perkiraan waktu kunjungan di tiap lokasi.</p>',
      airport: ''
        + '<h4 class="mb-2">Drop Bandara</h4>'
        + '<p class="lead mb-2">Antar-jemput bandara yang nyaman dan tepat waktu. Layanan tersedia untuk Bandara Husein Sastranegara (Bandung) dan ke/dari Jakarta (Soekarno-Hatta/Halim).</p>'
        + '<p class="mb-0">Termasuk opsi <em>meet & greet</em>, bantuan barang, serta pengaturan tol/parkir sesuai kebutuhan. Cocok untuk penumpang individu maupun keluarga dengan bagasi.</p>',
      bigbus: ''
        + '<h4 class="mb-2">Sewa Big Bus</h4>'
        + '<p class="lead mb-2">Bus pariwisata untuk study tour, outing kantor, ziarah, atau event besar. Kapasitas 45–59 kursi, full AC, nyaman untuk perjalanan luar kota dan antarkota.</p>'
        + '<p class="mb-0">Fasilitas bus meliputi kursi reclining, audio/mic untuk briefing, dan bagasi luas. Pengemudi berpengalaman siap mendampingi perjalanan Anda.</p>'
    };
    function applyFilter(filter){
      if(filter === 'all'){
        $('[data-category]').show().parent().show();
        if($desc.length){ $desc.html(descByFilter.all); }
        return;
      }
      $('[data-category]').each(function(){
        var $col = $(this);
        var match = $col.data('category') === filter;
        $col.toggle(match);
        $col.parent().toggle(match);
      });
      if($desc.length && descByFilter[filter]){ $desc.html(descByFilter[filter]); }
    }
    if($select.length){
      $select.on('change', function(){
        applyFilter($(this).val());
      });
    } else if($tabs.length){
      $tabs.on('click', function(e){
        e.preventDefault();
        var filter = $(this).data('filter');
        $tabs.removeClass('active');
        $(this).addClass('active');
        applyFilter(filter);
      });
    }
  })();



})(jQuery);

