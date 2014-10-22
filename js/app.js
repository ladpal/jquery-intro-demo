/* app.js
* main script file for our little application
* */

//$ = jquery
"use strict";

$(document).ready(function () {
    $('p a[href!="#top"]').attr('target', '_blank');//select all a tags in paragraphs, sets attributes on elements that are
    $('section').hide().fadeIn(1000); //selected -> opens up new tab for hyperlinks

    $('nav a, p a[href="#top"]').click(function(eventObject) {//adds click event. this refers to hyperlink element cause it raised the event
        console.log(this.hash);
        var targetElement = $(this.hash);//this.hash selects whatever section is selected by the user. returns hash part of URL
        $('html,body').animate({
            scrollTop: targetElement.offset().top - navHeight//set scroll top value to target elemnt
        }, 700);//firefox scrolls using body and chrome scrolls using html
                                                                                  //gives top coordinate of element on page
        eventObject.preventDefault();//handles all older browsers
    });

    var nav = $('nav');
    var navTop = nav.offset().top;//can call top or left on offset - returns pixels from top or left
    var navHeight = nav.outerHeight();//returns height of nav bar in pixels
    var navPlaceholder = $('.nav-placeholder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {//will fix navigation bar
        var scrollPos = $(this).scrollTop();//gets scroll position
        //console.log(scrollPos);
        if (scrollPos > navTop) {//if we are below nav element have fixed
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        } else {
            nav.removeClass('nav-fixed');//if we are above remove have fixed
            navPlaceholder.hide();
        }
    });

    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();

    });

    $('#confirm-exit-button').click(function() {
        window.location = 'http://google.com';
    });
});

