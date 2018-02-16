/*
 * N2D.js - Not 2D JavaScript
 *  Copyright (C) cordx56 all rights reserved.
 */

document.documentElement.className += " js";

function checkBlockDisplay() {
    $(".wrapper .section .block").each(function () {
        var sectionElem = $(this).parent(".section");
        if ($(this).offset().top < $(window).scrollTop() + ($(window).height() - 130)) {
            sectionElem.addClass("scrollReached");
        } else {
            sectionElem.removeClass("scrollReached");
        }
        if ($(this).offset().top + ($(this).height() - 130) < $(window).scrollTop()) {
            sectionElem.addClass("scrollPassed");
        } else {
            sectionElem.removeClass("scrollPassed");
        }
    });
}


$(window).on("load", function () {
    checkBlockDisplay();
});
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $(document.documentElement).addClass("scroll");
    } else {
        $(document.documentElement).removeClass("scroll");
    }
    checkBlockDisplay();
});
