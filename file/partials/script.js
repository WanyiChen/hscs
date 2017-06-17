//expanding and collapsing sidebar menu

	$( "#expand1" ).click(function( event ) {
			$( "#sub1" ).slideToggle( "fast", function() {});
			changeColor("#expand1");
	});
	$( "#expand2" ).click(function( event ) {
			$( "#sub2" ).slideToggle( "fast", function() {});
			changeColor("#expand2");
	});
	$( "#expand3" ).click(function( event ) {
			$( "#sub3" ).slideToggle( "fast", function() {});
			changeColor("#expand3");
	});
	$( "#hambuger" ).click(function( event ) {
			$( "#menuContent" ).slideToggle( "fast", function() {});
	});

//change sidebar menu color: menu items that can expand becomes carolina blue when selected

function changeColor(menuItem){
	if ($(menuItem).css('background-color')=="rgb(1, 73, 118)"){
		$(menuItem).css("background-color","rgb(114, 200, 254)");
	} else {
		$(menuItem).css("background-color","rgb(1, 73, 118)");
	}
}

//read more and show less

$( "#readMore1" ).click(function( event ) {
		moreLess("#readMore1", "#text1", "#showLess1");
});

$( "#showLess1" ).click(function( event ) {
		moreLess("#showLess1", "#text1", "#readMore1");
});

$( "#readMore2" ).click(function( event ) {
		moreLess("#readMore2", "#text2", "#showLess2");
});

$( "#showLess2" ).click(function( event ) {
		moreLess("#showLess2", "#text2", "#readMore2");
});

$( "#readMore3" ).click(function( event ) {
		moreLess("#readMore3", "#text3", "#showLess3");
});

$( "#showLess3" ).click(function( event ) {
		moreLess("#showLess3", "#text3", "#readMore3");
});

$( "#readMore4" ).click(function( event ) {
		moreLess("#readMore4", "#text4", "#showLess4");
});

$( "#showLess4" ).click(function( event ) {
		moreLess("#showLess4", "#text4", "#readMore4");
});

function moreLess(heading1, text, heading2){
		$(heading1).hide();
		$(text).slideToggle( "slow", function() {});
		$(heading2).show();
}

//making the menu sticky
$( document ).ready(function() {

  var $sticky = $('.sticky');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var stickyTop = $sticky.offset().top;

    $(window).scroll(function(){
      var windowTop = $(window).scrollTop();

			if (stickyTop < windowTop) {
          $sticky.css({position: 'fixed', top: 0});
      } else {
          $sticky.css({position: 'relative', top: 'initial'});
      }
    });

  }

});

//google analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-101211276-1', 'auto');
  ga('send', 'pageview');
