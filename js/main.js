/**
 * Created with JetBrains PhpStorm.
 * User: Brittany
 * Date: 4/8/13
 * Time: 10:10 PM
 * To change this template use File | Settings | File Templates.
 */

var app = {
  simpleFunction: function() {
    //display Filter controls
    $('#filter-div').css("display","inline");
		//Queness Captions
    //move the image in pixel
    var move = -15;
    //zoom percentage, 1.2 =120%
    var zoom = 1.2;
    //On mouse over those thumbnail
    $('.item').hover(function() {

      //Set the width and height according to the zoom percentage
      width = $('.item').width() * zoom;
      height = $('.item').height() * zoom;
  
      //Move and zoom the image
      $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
  
      //Display the caption
      $(this).find('div.caption').stop(false,true).fadeIn(200);
      },
    function() {
      //Reset the image
      $(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});
      //Hide the caption
      $(this).find('div.caption').stop(false,true).fadeOut(200);
    });
    //filtering
    $('ul#filter button').click(function() {
      $(this).css('outline','none');
      $('ul#filter .current').removeClass('current');
      $(this).parent().addClass('current');
      var filterVal = $(this).text().toLowerCase().replace(/ /g,'-');
      if(filterVal == 'show-all') {
        $('div.item.hidden').fadeIn('slow').removeClass('hidden');
      } else {
        $('div.item').each(function() {
          if(!$(this).hasClass(filterVal)) {
            $(this).fadeOut('normal').addClass('hidden');
          } else {
            $(this).fadeIn('slow').removeClass('hidden');
            }
        });
      }
      return false;
    });
    //Slimbox Gallery
    // $slimbox([["image 1 url goes here", "image description"],["image 2 url goes here", "image description"],["image 3 url goes here", "image description"]], 0, optional );
  jQuery("#z-festShirt a").slimbox();
  jQuery("#datasafe a").slimbox();
  jQuery("#typography a").slimbox();
  jQuery("#bizcards a").slimbox();
  jQuery("#zshare a").slimbox();
  jQuery("#spencerSelf a").slimbox();
  jQuery("#spencerGames a").slimbox();
  },/* end SimpleFunction */

  init: function() {
    app.simpleFunction();
  }
};


$(function() {
  app.init();
});