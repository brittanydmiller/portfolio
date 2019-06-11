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
    var options = {overlayFadeDuration: 1, resizeDuration: 1, imageFadeDuration: 1, captionAnimationDuration: 1};

    $("#swag a").click(
      function(){
        $.slimbox([
          ["images/t-shirtFront.png", "Z-Fest T-shirt (Front). Graphic design."],
          ["images/t-shirtBack.png", "Z-Fest T-Shirt (Back). Graphic design."],
          ["images/front-shirt.jpg", "Z-Fest T-Shirt (Front). Graphic design."],
          ["images/back-shirt.jpg", "Z-Fest T-Shirt (Back). Graphic design."],
          ["images/spencertee.jpg", "Band T-Shirt. Hand drawn, then submitted for print via Illustrator."],
          ["images/spencer-buttons.jpg", "Band badges. Combination of Hand Drawing and Illustrator."]
        ], 0, options);
      });
    $("#datasafe a").click(
      function(){
        var description = "Data Safe Product Label for Z Systems, inc. Graphic design.";
        $.slimbox([
          ["images/DataSafeDark.jpg", description],
          ["images/ZDataSafe.jpg", description]
        ], 0, options);
      });
    $("#typography a").click(
      function(){
        var description = "Typography Exercises. Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes.";
        $.slimbox([
          ['portfolio/typographyexercises/typography-pngs/typographyHome.png', description],
          ["portfolio/typographyexercises/typography-pngs/typographyP5.png", description],
          ["portfolio/typographyexercises/typography-pngs/typographyP2.png", description],
          ["portfolio/typographyexercises/typography-pngs/typographyP3.png", description],
          ["portfolio/typographyexercises/typography-pngs/typographyP4.png", description]
        ], 0, options);
      });
    $("#zshare a").click(
      function(){
        var frontDescription = "product card for Z Systems, inc. (Front.) Copy editing, graphic design.";
        var backDescription = "product card for Z Systems, inc. (Back.) Copy editing, graphic design.";
        $.slimbox([
          ["images/ZSharedark.jpg", "Z-Share " + frontDescription],
          ["images/zshare-phys-back.jpg", "Z-Share " + backDescription],
          ["images/Z-Share-card.jpg", "Z-Share " + frontDescription],
          ["images/Z-Share-card-back-portfoliover.png", "Z-Share " + backDescription],
          ["images/zrentals-front.jpg", "Rentals card" + frontDescription],
          ["images/zrentals-back.jpg", "Rentals card" + backDescription],
          ["images/CeoBizCardDark.jpg", "Business Cards for Z Systems, inc. Graphic design"],
          ["images/WeRentCard.jpg", "Business cards for  Z Systems, inc. (Rental sticker on back). Graphic Design."],
          ["images/spencer_bizcard.jpg", "Business cards for Spencer McGillicutty. Layout."],
          ["images/spencer_bizcard_back.jpg", "Business cards for Spencer McGillicutty. Layout."]
        ], 0, options);
      });
    $("#spencerSelf a").click(
      function(){
        var description = "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals.";
        $.slimbox([
          ["images/SpencerSelfCover.jpg", description],
          ["images/spencer-debut-all.jpg", description + " (Back Cover.)"],
          ["images/spencer-debut-cover.jpg", description + " (Front Cover.)"],
          ["images/spencer-debut-disc.jpg", description + " (Disc.)"],
          ["images/SpencerSelfInside.jpg", description + " (Inside panel.)"],
          ["images/Spencer-Disc.png", description + " (Disc.)"],
          ["images/SpencerBackCover.jpg", description + " (Back Cover.)"]
        ], 0, options);
      });
    $("#spencerGames a").click(
      function(){
        var description = "Spencer McGillicutty's second album, Games. Graphic design, copy editing, vocals."
        $.slimbox([
          ["images/Games500.jpg", description],
          ["images/spencerGamesDisc.jpg", description + " (Disc.)"],
         ], 0, options);
      });
    $("#leela a").click(
      function(){
        $.slimbox([
          ['images/leela11.jpg', 'Leela Cosplay Costume for CONvergence Exhibition'],
          ["images/leela3.jpg", "Moonboots painted with PlastiDip, with added foam buckles. Ray gun made from water pistol, hair stick, and moldable foam for the accents."],
          ["images/leela5.jpg", "Ponytail wig constructed from 2 wigs."],
          ["images/leela_stage.jpg", "Displayed at CONvergence Costume Exhibition."],
          ["images/leela-gun.jpg", "Ray gun made from water pistol, hair stick, and moldable foam for the accents."],
          ["images/leela-eye1.jpg", "Buckram Eyeball with Latex eyelid and wire eyelashes. Movable pupil on fishing line and pulleys. "],
          ["images/leela-eye.jpg", "Buckram Eyeball with Latex eyelid and wire eyelashes. Movable pupil on fishing line and pulleys. "],
          ["images/leela-gauntlet.jpg", "Gauntlet constructed from rubber galoshes, knee pads, and moldable foam, with LED lights and cell phone storage inside."]
        ], 0, options);
      });
    $("#miscCostumes a").click(
      function(){
        $.slimbox([
          ['images/wolverine_threat.jpg', "Wolverine. Claws made from spikes, foam, and duct tape. Fake side burns with spirit gum. Dogtags made from painted cardboard."],
          ["images/bilbo2.jpg", "Bilbo Baggins. Hobbit ears, hairy feet. Thrifted clothing."],
          ["images/weird_al_yankovic_accordion.jpg", "Weird Al Yankovic. All pieces thrifted. Popped the lenses out of some sunglasses and painted them. Already had an accordion!"],
          ["images/barriss-and-kit.jpg", "Barriss Offee, seen here with Kit Fisto. Made a cream face paint out of eyeshadow and chapstick. Sewed the blue hooded cloak."],
          ["images/han_solo_solo.jpg", "Han Solo. Custom vest created by disassembling a thrifted shirt and re-hemming. Blood stripe temporarily added to pants. Custom blaster and gun belt. "],
          ["images/han-belt-left.jpg", "Han Solo. Gun belt made by connecting a belt and a purse strap. Used a corner of the purse for the holster."],
          ["images/han-belt-front.jpg", "Han Solo. Gun belt made by connecting a belt and a purse strap. Used a corner of the purse for the holster."],
          ["images/han-belt-right.jpg", "Han Solo. Gun belt accents are pieces of a hair dryer and curling iron I thrifted."],
          ["images/han-blaster.jpg", "Han Solo. (Not a replica of Han's personal blaster). Assembled overnight by combining pieces from a mini hair dryer and a curling iron with black duct tape."],
          ["images/han-blaster-front.jpg", "Han Solo. (Not a replica of Han's personal blaster). Assembled overnight by combining pieces from a mini hair dryer and a curling iron with black duct tape."],
          // <!-- ["images/han-vest-crop.jpg", "Han Solo. Custom vest, blaster and gun belt."], -->
          ["images/han_solo2.jpg", "Han Solo. Custom vest created by disassembling a thrifted shirt and re-hemming. Blood stripe temporarily added to pants. Custom blaster and gun belt. "],
          ["images/leia-full.jpg", "Princess Leia. Gown made in one night from bedsheets, staples, duct tape. (Blaster and belt borrowed.) Won first prize in the dorm costume contest."],
          // <!-- ["images/leia.jpg", "Princess Leia. Gown made in one night from bedsheets, staples, duct tape. (Blaster and belt borrowed.) Won first prize in the dorm costume contest."],-->
          ["images/robin_hood.jpg", "Disney Animated Robin Hood (with Kaa and Maid Marian). Cut and altered thrifted pieces. Crafted fox ears and affixed to borrowed hat."],
          ["images/itchy_scratchy1_crop.jpg", "Made both Itchy and Scratchy costumes - created gloves, clothes with purple bellies, thrifted and painted the mouse headpiece, created the cat headpiece."],
          // <!-- ["images/itchy-scratchy-cute.jpg", ""], -->
          ["images/itchy-scratchy.jpg", "Made both Itchy and Scratchy costumes - created gloves, clothes with purple bellies, thrifted and painted the mouse headpiece, created the cat headpiece."],
          ["images/la-la-La-la-la.jpg", "Daria Morgendorffer. Thrifted all pieces. Popped the lenses out of some round sunglasses."],
          ["images/rita-skeeter2.jpg", "Rita Skeeter for the Harry Potter Premiere. All pieces thrifted."],
          // <!-- ["images/rita_skeeter.jpg", "Rita Skeeter (from Harry Potter). All pieces thrifted."], -->
          ["images/harry-potter.jpg", "Molly Weasley costume for the Harry Potter Premiere. All pieces thrifted/found."],
          ["images/molly-weasley.jpg", "Molly Weasley costume for the Harry Potter Premiere. All pieces thrifted/found."],
          ["images/jocks.jpg", "CONvergence Group Costume for the theme 'Villains'. We went meta and showed up to the nerdfest as Jocks and Cheerleaders. Sourced and printed the Cheerleader uniforms and Jocks jerseys. Reception was confused and then celebratory. "],
          ["images/zombie_dorothy.jpg", "Zombie Dorothy. Part of a full zombie Oz crew for the pub crawl. Included a basket with a Toto CD in it. Seen here talking to Zombie Billy Mays from the OxiClean and ShamWow commercials."],
          ["images/pilot_gang_crop.jpg", "Pilot Costume with handmade goggles. Coat and scarves were thrifted. Safari costume on the bearded fellow as well -- all pieces thrifted."],

        ], 0, options);
      });
    $("#visualArt a").click(
      function(){
        $.slimbox([
          ['images/tiger.jpg', "Tiger. Acrylic paints"],
          ["images/diver.jpg", "Diver. Ink."],
          ["images/lighthouse.jpg", "Lighthouse. Acrylic paints."],
          ["images/monkeys.jpg", "Snow Monkeys. Ink."],
          ["images/belma2.gif", "Belma Treewalker. Pencil."],
          ["images/BlueEyes.jpg", "Blue Eyes White Dragon Yugioh. Ink."],
          ["images/mygoliath.jpg", "Goliath from Gargoyles. Pencil."],
          ["images/AllTheHappyLegs.jpg", "Album Cover Mockup. Ink and Marker, with some Illustrator for the mockup."]
        ], 0, options);
      });
    $("#props a").click(
      function(){
        var lettersDescrip = "Large Prop Letters. Constructed from dense styrofoam. Used in a photoshoot for a new album cover for our Japanese release with Fastcut Records. With Jerry McMurray.";
        var foreignerDescrip = "Making rifles for The Foreigner from wood and piping.";
        var museumDescrip = "Taking casts of bodies to use as the Art in Museum.";

        $.slimbox([
          ["images/muppets_construction.jpg", "Muppets under construction. Made with paper mache, foam, glue, cardboard, ping-pong balls, and various felted fabrics. Led by Mitchell Johnson and Gwen Wasmund. Made with Jerry McMurray and Oanh Vu."],
          ["images/chin_muppet.jpg", "Cro Magnon Muppet has a large cardboard chin."],
          ["images/finished_muppets.jpg", "Some faces are taking shape."],
          ["images/muppets-pile900.jpg", "Pompous Mozart Muppet has a body!"],
          ["images/muppets-bodies900.jpeg", "Christmas Muppets with costumes."],
          ["images/G-A-M-E-S-compressed-600.jpg", lettersDescrip],
          ["images/spencer_japan_album_cover.jpg", lettersDescrip],
          ["images/gun1.jpg", foreignerDescrip],
          ["images/gun2.jpg", foreignerDescrip],
          ["images/gun3.jpg", foreignerDescrip],
          ["images/gun4.jpg", foreignerDescrip],
          ["images/foreigner-guns.jpg", "Prop rifles onstage in The Foreigner."],
          ["images/bodycast1.jpg", museumDescrip],
          ["images/bodycast2.jpg", museumDescrip],
          ["images/bodycast3.jpg", museumDescrip],
          ["images/bodycast4.jpg", museumDescrip]
        ], 0, options);
      });
    $("#sets a").click(
      function(){
        var foreignerDescrip = 'The Foreigner at The College of Saint Benedict. Sourced all the kitsch, the fishing net, the paddles, the art, the spoon rack, coat rack, letter rack, etc. Helped make the fake fish trophies using a vacuform.';
        var musicVidDescrip = "Prop Master for Music Video Shoot, Restaurant Scene. Sourced tables, chairs, table cloths, dishware, menus, checks.";

        $.slimbox([
          ['images/foreigner-day.jpg', foreignerDescrip],
          // <!-- ["images/foreigner-day.jpg", ""], -->
          // <!-- ["images/foreigner11.jpg", ""], -->
          ["images/foreigner15.jpg", foreignerDescrip],
          ["images/foreigner13.jpg", foreignerDescrip],
          ["images/foreigner14.jpg", foreignerDescrip],
          ["images/foreigner16.jpg", "Set dressing on walls."],
          ["images/foreigner12.jpg", "Dynamite made from wood, paper, string, paint."],

          ["images/larkspur-set.jpg", "Larkspur Set (Paint Crew)"],
          ["images/talk-to-me-set.jpg", "Talk to Me Like the Rain and Let Me Listen (Paint Crew)"],
          ["images/music_vid2.jpg", musicVidDescrip],
          ["images/spencer-vid2.jpg", musicVidDescrip],
          ["images/menu2.jpg","Prop Master for Music Video Shoot, Restaurant Scene. Created menu."],
          ["images/check","Prop Master for Music Video Shoot, Restaurant Scene. Created check."],
          ["images/check_front1.jpg","Prop Master for Music Video Shoot, Restaurant Scene. Created check & end title."],
          ["images/music_vid.jpg", "Prop Master for Music Video Shoot, Band Scene"]
          // <!-- ["images/spencer-vid1.jpg", "Music Video Shoot, Restaurant Scene"], -->
          // <!-- INSERT MUSEUM CASTING HERE -->
        ], 0, options);
      });
    $("#zbrochure a").click(
      function(){
        var description = 'Company Brochure for Z Systems, inc. Graphics, layout, content production and copy editing';
        $.slimbox([
          ['images/zbrochure-phys-front.jpg', description],
          ["images/zbrochure-phys-back.jpg", description]
        ], 0, options);
      });
    $("#z-share-vent a").click(
      function(){
        $.slimbox([
          ['images/z-shareFull.jpg', "Z-Share vent panel. Product design"]
        ], 0, options);
      }
    );
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
  videoMaster: function(){

    // var player = videojs('video');

    // player.playlist([
    //   { sources: [{src: "videos/leela-eye-rotated.mov", type: 'video/mp4'}], poster: ''},
    //   { sources: [{src: "videos/leela-eye-hand.mp4", type: 'video/mp4'}], poster: ''},
    //   { sources: [{src: "videos/leela-gauntlet-lights.mp4", type: 'video/mp4'}], poster: ''},
    //   { sources: [{src: "videos/leela-gauntlet-storage2.mp4"  type: 'video/mp4'}], poster: ''}
    // ]);

    // // Play through the playlist automatically.
    // player.playlist.autoadvance(0);
  },


  init: function() {
    app.stripe();
    app.filterMaster();
    app.slimboxMaster();
    app.setCopyright();
    // app.videoMaster();
  }
};

$(function() {
  app.init();
});