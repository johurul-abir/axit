$(document).ready(function(){
			
			$('#contant-one'). show();

			$('#tab-1').addClass('active');
			$('#tab-2').removeClass('active');
			$('#tab-3').removeClass('active');



			$('#tab-1').click(function(){

				$('#tab-1').addClass('active');
				$('#tab-2').removeClass('active');
				$('#tab-3').removeClass('active');


				$('#contant-one').show(500);
				$('#contant-two').hide();
				$('#contant-three').hide();


			});


			
			$('#tab-2').click(function(){

				$('#tab-1').removeClass('active');
				$('#tab-2').addClass('active');
				$('#tab-3').removeClass('active');


				$('#contant-two').show(500);

				$('#contant-one').hide();
				$('#contant-three').hide();



		});


			$('#tab-3').click(function(){

				$('#tab-1').removeClass('active');
				$('#tab-2').removeClass('active');
				$('#tab-3').addClass('active');


				$('#contant-three').show(500);

				$('#contant-one').hide();
				$('#contant-two').hide();



		});


				$('.owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:true,
			    autoplay: true,
			    autoplayTimeout:3000,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			})





		})