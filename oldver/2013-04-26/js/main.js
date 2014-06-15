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
			
		//Lightbox
		 $("a[rel^='prettyPhoto']").prettyPhoto({
			social_tools: false,
			theme: 'light_rounded'
		});
			console.log("pretty photo is running");

		//CodaPopupBubble
		$(function () {
			$('.bubbleInfo').each(function () {
				// options
				var distance = 10;
				var time = 250;
				var hideDelay = 300;

				var hideDelayTimer = null;

				// tracker
				var beingShown = false;
				var shown = false;

				var trigger = $('.trigger', this);
				var popup = $('.popup', this).css('opacity', 0);

				// set the mouseover and mouseout on both element
				$([trigger.get(0), popup.get(0)]).mouseover(function () {
					// stops the hide event if we move from the trigger to the popup element
					if (hideDelayTimer) clearTimeout(hideDelayTimer);

					// don't trigger the animation again if we're being shown, or already visible
					if (beingShown || shown) {
						return;
					} else {
						beingShown = true;

						// reset position of popup box
						popup.css({
							top: -50,
							left: -33,
							right: 33,
							display: 'block' // brings the popup back in to view
						})

							// (we're using chaining on the popup) now animate it's opacity and position
							.animate({
								top: '-=' + distance + 'px',
								opacity: 0.95
							}, time, 'swing', function() {
								// once the animation is complete, set the tracker variables
								beingShown = false;
								shown = true;
							});
					}
				}).mouseout(function () {
						// reset the timer if we get fired again - avoids double animations
						if (hideDelayTimer) clearTimeout(hideDelayTimer);

						// store the timer so that it can be cleared in the mouseover if required
						hideDelayTimer = setTimeout(function () {
							hideDelayTimer = null;
							popup.animate({
								top: '-=' + distance + 'px',
								opacity: 0
							}, time, 'swing', function () {
								// once the animate is complete, set the tracker variables
								shown = false;
								// hide the popup entirely after the effect (opacity alone doesn't do the job)
								popup.css('display', 'none');
							});
						}, hideDelay);
					});
			});
		});
    },/* end SimpleFunction */

       init: function() {
          console.log("app init!");
          app.simpleFunction();
       }
  };

$(function() {
    console.log("ready function is running");
    app.init();
});