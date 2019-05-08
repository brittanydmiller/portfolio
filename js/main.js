var app = {
  filterMaster: function() {
    $('#filter-div h3').click(function() {
      $('#filter').toggle();
    });
    $('ul#filter button').click(function() {
      $(this).css('outline','none');
      $('ul#filter li .current').removeClass('current');
      $(this).addClass('current');
      var filterVal = $(this).text().toLowerCase().replace(/ /g,'-').replace(/&/g,'and');
      if(filterVal == 'show-all') {
        $('div.item.hidden').fadeIn('slow').removeClass('hidden').addClass('displayed');
      } else {
        $('div.item').each(function() {
          if(!$(this).hasClass(filterVal)) {
            $(this).fadeOut('normal').addClass('hidden').removeClass('displayed');
          } else {
            $(this).fadeIn('slow').removeClass('hidden').addClass('displayed');
            }
        });
      }
      app.stripe();
      return false;
    });
  },
  slimboxMaster: function() {
  // $slimbox([["image 1 url goes here", "image description"],["image 2 url goes here", "image description"],["image 3 url goes here", "image description"]], 0, optional );
    $("#swag a").slimbox();
    $("#datasafe a").slimbox();
    $("#typography a").slimbox();
    $("#zshare a").slimbox();
    $("#spencerSelf a").slimbox();
    $("#spencerGames a").slimbox();
    $("#leela a").slimbox();
    $("#miscCostumes a").slimbox();
    $("#visualArt a").slimbox();
    $("#props a").slimbox();
    $("#sets a").slimbox();
    $("#zbrochure a").slimbox();
  },
  setCopyright: function() {
    var currentYear = new Date().getFullYear();
    $("#copyright #year").text(currentYear);
  },
  stripe: function(){
    $(".item.displayed").removeClass("dark");
    $(".item.displayed").filter(function(index, element){
        return index % 2 == 0;
      }).addClass("dark");
  },
  init: function() {
    app.stripe();
    app.filterMaster();
    app.slimboxMaster();
    app.setCopyright();
  }
};

$(function() {
  app.init();
});