$(document).ready(function(){
  $("marquee img").mouseenter(function(){
    i=this.id;
    $("#"+String(i)).animate({height: '200px'});

  });
});


$(document).ready(function(){
  $("marquee img").mouseleave(function(){
    i=this.id;
    $("#"+String(i)).animate({height: '150px'});

  });
});


$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
  });
});

window.setInterval(setanime,1000);
function setanime(){
	$("button").animate( {opacity:0.25}, 1000,
	 function(){
		$(this).css('opacity',1)
	});
}


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
});



/*Slideshow*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.setInterval(setanime,2000);
function setanime(){
    $(".page_logo").animate( {opacity:0.25}, 2000,
     function(){
        $(this).css('opacity',1)
    });
}