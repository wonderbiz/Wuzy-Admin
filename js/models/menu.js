/**
 * Created by johnpogosyan on 2/9/14.
 */

//look for child li elements in grandparent #sidebar-nav of parent #dashboard-menu
$("#sidebar-nav #dashboard-menu > li").click(function() {
    //remove the arrow on any existing elements
    $("li div").remove('div');
    //$("li div").removeClass("arrow arrow_border pointer");
    //$("li").children('li').remove(".active", ".arrow_border",".pointer");
    //variable for creating the arrow
    var makeArrow = "<div class=\"pointer\">\
            <div class=\"arrow\"></div>\
            <div class=\"arrow_border\"></div>\
            </div>"
    //remove active class on li
    $("li").removeClass("active");
    //add active class on clicked object
    $(this).addClass("active");
    //append makeArrow variable to clicked object
    $(this).append(makeArrow);
    });


/*$(window).resize(function() {
    alert("resized");
    $("#sidebar-wrapper").addClass("collapse");
});*/