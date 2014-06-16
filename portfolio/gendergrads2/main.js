
// here is a basic structure that works well for building jQuery enabled pages and simple web-apps
/*
 There is a tabbed interface ready for jQuery code. Add the appropriate code to make the tabs work properly using jQuery for DOM manipulation.
 The correct behavior is that one tab anchor item appears selected and it's corresponding content section is visible while all other content sections are not visible.
 When you click a tab anchor, first all content divs are hidden and then the href value is used to get the correct div to display which is then made visible.
 Once you have that working play with various methods of changing the visibility of the content areas, can you make them fade in and out?

 */

var app = {

	// this function should add click handlers to the anchors
	initTabbedInterface: function() {
       //set up content divs to initially hide
        var contentDiv = $("div.tabContent")[0].childNodes;
        console.log("contentDiv:  ");
        console.log(contentDiv);
        var contentDivs = $("div.tabContent>div");
        console.log('contentDivs: ');
        console.log(contentDivs);
        contentDivs.each(function(){
            this.hidden = true;
        });
        //show the intro content div
        contentDivs[0].hidden = false;
        //set up tabs for click functions
        var tabList = $("div#demo>p>a");
        console.log(tabList);
        $(tabList).each(function(index){
            console.log(index + ": " + $(this).text() );
    /*TABS!*/
            $(this).click(function(){
                console.log($(this));
                //$("a.active").removeClass("active");
                //$(this).addClass("active");
                var myContentId = this.hash;
                console.log('myContentId:  ' + myContentId);
                //link to proper content div
                contentDivs.each(function(){
                if ("#"+this.id == myContentId){
                    console.log("Inside the IF");
                    console.log($(this));
                    contentDivs[0].hidden = true;
                    $(this)[0].style.cssText = "display: block";
                    //contentText.css("display", "block");
                    console.log($(this)[0].style);
                }else{
                    this.style.cssText = 'display: hidden';
                }
                });
            });
        });


		// one tab anchor should always appear selected
		// it's corresponding content section should also be visible
		// all other content sections should not be visible
		console.log("TABS!");

		// When a user clicks a tab anchor:
		// 		first all content divs are hidden
		// 		then the href value is used to get the correct div to display which is then made visible
		//		the clicked anchor now appears selected while the others are not
	}

};



// init function called when the page is ready
// for more on this see http://api.jquery.com/ready/
$(function() {
	app.initTabbedInterface();
});
