$(function(){
    //use strict
    
    //menubar js
    
    var menuOfset = $('#custom_nav').offset().top;
    $(window).on('scroll',function(){
        var scrillTop = $(window).scrollTop()
        
        if(scrillTop > menuOfset){
            $('#custom_nav').addClass('menuFix');
        }else{
            $('#custom_nav').removeClass('menuFix');
        }
        
    // backtop  
        
        if (scrillTop > 200){
            $('.bactop').fadeIn(1000);
        }else{
            $('.bactop').fadeOut(500); 
        }
        
    });
	
     $('.bactop').on('click', function(){
         $('html,body').animate({
             scrollTop: 0
         }, 2000);
             
     });  
    
    
    // light box js
	
	$('.view-work').venobox({
        framewidth: '600px',
        frameheight: '500px',
        borderRadius: '50px',
        bgcolor: '#f21e4e',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true,
        share: ['facebook', 'twitter', 'download']
    }); 
    
    //testimonials
   $('.tesimonial-items').slick({
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		infinite: true,
		slidesToScroll: 2,
		slidesToShow: 2,
        dots: true,
        dotsClass: 'slide-dots',
	});
        
    // works filterzr
    
    $('.filter-container').filterizr();
	$('.filter-menu ul li').on('click', function(){
		
		$('.filter-menu ul li').removeClass('active');
		$(this).addClass('active');
	});	
    
    
    
    
});