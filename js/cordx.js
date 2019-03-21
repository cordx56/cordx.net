/*
 * cordx.js
 *  Copyright 2019 cordx56 all rights reserved.
 */

document.documentElement.className += " js";

$(function() {
    $(document).on("click", "a[href^='#']", function () {
        $("html, body").scrollTop($(this.hash).offset().top - $(".header").outerHeight() - 20);
        return false;
    });
});
