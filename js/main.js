var app = {
  filterMaster: function() {
    $('#filter-div h3').click(function() {
      $('#filter').toggle();
    });
    $('ul#filter button').click(function() {
      $(this).css('outline','none');
      $('ul#filter .current').removeClass('current');
      $(this).parent().addClass('current');
      var filterVal = $(this).text().toLowerCase().replace(/ /g,'-').replace(/&/g,'and');
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
  },
  slimboxMaster: function() {
  // $slimbox([["image 1 url goes here", "image description"],["image 2 url goes here", "image description"],["image 3 url goes here", "image description"]], 0, optional );
    $("#z-festShirt a").slimbox();
    $("#datasafe a").slimbox();
    $("#typography a").slimbox();
    $("#zshare a").slimbox();
    $("#spencerSelf a").slimbox();
    $("#spencerGames a").slimbox();
    $("#bizcards a").slimbox();
  },
  setCopyright: function() {
    var currentYear = new Date().getFullYear();
    $("#copyright #year").text(currentYear);
  },
  init: function() {
    app.filterMaster();
    app.slimboxMaster();
    app.setCopyright();
  }
};

$(function() {
  app.init();
});