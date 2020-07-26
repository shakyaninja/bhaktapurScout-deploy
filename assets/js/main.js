function openNav() {
      document.getElementById("curtain-nav").style.width = "100%";
  }

  function closeNav() {
      document.getElementById("curtain-nav").style.width = "0%";
  }


$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	
});

// Scrolling Effect

$(window).on("load", function() {    
    if($(window).scrollTop()) {
          $('nav').addClass('black');
          $('nav').removeClass('bg-before');
    }

    else {
          $('nav').removeClass('black');
          $('nav').addClass('bg-before');
    }
})

$(window).on("scroll", function() {    
    if($(window).scrollTop()) {
          $('nav').addClass('black');
          $('nav').removeClass('bg-before');
    }

    else {
          $('nav').removeClass('black');
          $('nav').addClass('bg-before');
    }
})

// var width ;
// var height ;
// $(document).on("load",function(){
//       width = window.innerWidth;
//       height = window.innerHeight;
// })

// $(window).on("resize",function(){
//       width = window.innerWidth;
//       height = window.innerHeight;
//       var map = document.getElementById("map");
//       map.innerHeight = 420;
//       map.innerWidth = 500;
// })
