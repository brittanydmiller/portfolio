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
        var counter = 0;

       $(function() {
           $(".mini").draggable();
           $(".sil").each(function(){
                var silId = $(this).attr("id");
                console.log ("silId" + " " + silId);
                var silLength = silId.length;
                console.log ("silLength" + " " + silLength);
                var base = silId.substring(0,2);
                console.log ("base" + " " + base);
                var miniId = "mini" + base;
                console.log ("miniId" + " " + miniId);
               $(this).droppable({
                   accept: "#" + miniId,
                   tolerance: "pointer",
                   drop: function(event, ui) {
                       $(this).hide("explode", "linear", 600);
                       $('#' + miniId).hide("bounce", "easeOutQuad", 300);
                       counter++;
                       console.log(counter);
                       if(counter === 4){
                            $(function() {
                                $( ".sil" ).delay(500).fadeIn("slow").delay(500).hide("explode", "swing", 1000);
                                $( "#dialog" ).dialog({
                                      show: "bounce",
                                      modal: true,
                                      dialogClass: "winner no-close",
                                      position: {
											my: "left",
											at: "left",
											of: window,
											collision: "fit",
											// Ensure the titlebar is always visible
											using: function( pos ) {
												var topOffset = $( this ).css( pos ).offset().top;
												if ( topOffset < 0 ) {
													$( this ).css( "top", pos.top - topOffset );
												}
											}
										},
                                      buttons: {
                                        "Next Game": function() {
                                          console.log($('body').attr('id'));
                                          if ($('body').attr('id') === "playgame1"){
                                            document.location.href='puzzlemax2.html';
                                          } else {
                                              document.location.href='puzzlemax.html';
                                          }
                                          $( this ).dialog( "close" );
                                        },
                                        Cancel: function() {
                                          $( this ).dialog( "close" );
                                        }
                                      }
                                    });
                            });
                        }
                   }
               });
             })
       });
    },/* end SimpleFunction */

   init: function() {
      console.log("app init!");
      app.simpleFunction();
   }

  };

$(function() {
    app.init();
});