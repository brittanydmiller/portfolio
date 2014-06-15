/**
 * Created with JetBrains PhpStorm.
 * User: Brittany
 * Date: 4/8/13
 * Time: 10:10 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("main.js is running");

var app = {
    simpleFunction: function() {

        console.log("SimpleFunction is running");
        // cache container
        var $container = $("#container");
        console.log($container);
        // initialize isotope

        $('#container').isotope({
            // options...
            itemSelector : '.item',
            layoutMode : 'masonry',
            masonry: {columnWidth: 240},
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            },
            filter: '.my-selector'
        },
        function( $items ) {
            var id = this.attr('id'),
            len = $items.length;
            console.log( 'Isotope has filtered for ' + len + ' items in #' + id );
        })
		
		// filter items when filter link is clicked
        $('#filters a').click(function(){

            var selector = $(this).attr('data-filter');
            console.log("I filtered something by" + selector);
            console.log(this);
            $container.isotope({ filter: selector });
            console.log($container.isotope);
            return false;
        });
		//Hover Captions
		//move the image in pixel
		//var move = 0;
		
		//zoom percentage, 1.2 =120%
		//var zoom = 1;
		//On mouse over those thumbnail
		//$('.item').hover(function() {
        
        //Set the width and height according to the zoom percentage
        //width = $('.item').width() * zoom;
        //height = $('.item').height() * zoom;
        
        //Move and zoom the image
        //$(this).find('img').stop(false,true).animate({'width':width, //'height':height, 'top':move, 'left':move}, {duration:200});
        
        //Display the caption
        //$(this).find('div.caption').stop(false,true).fadeIn(200);
    //},
    //function() {
        //Reset the image
        //$(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});    
        //Hide the caption
        //$(this).find('div.caption').stop(false,true).fadeOut(200);
   // });
	//Lightbox
	 $("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
		theme: 'light_rounded'
	});
        console.log("pretty photo is running");

    },/* end SimpleFunction */

       init: function() {
          console.log("app init!");
          // basic initialization code goes here
          // this is what happens once when the page is loaded
          // keep it short and understandable
          // usually just calling to other functions defined above
          app.simpleFunction();
       }

  };
/*
$(window).load(function(){
    console.log("ready function is running");
    app.init();
});
*/
$(function() {
    console.log("ready function is running");
    app.init();
});