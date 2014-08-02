var app = {
  simpleFunction: function() {
    //display Filter controls
    $('#filter-div').css("display","inline");

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
  //jQuery("#bizcards a").slimbox();
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