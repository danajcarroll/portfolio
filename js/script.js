// ------------ NAV OFFSET ------------
$("nav a[href^='#']").click(function (e) {
    // prevents browser from doing a default click
    e.preventDefault();

    // finds the position of selected link/ID
    let idPos = $($(this).attr("href")).offset().top - $("header").innerHeight() + 5;

    // animates to selected section position
    $("body, html").animate({scrollTop: idPos}, 1000);
});

$("header a").click(function (e) {
    // prevents browser from doing a default click
    e.preventDefault();

    // finds the position of selected link/ID
    let idPos = $($(this).attr("href")).offset().top - $("header").innerHeight();

    // animates to selected section position
    $("body, html").animate({scrollTop: idPos}, 1000);
});




$(document).ready(function() {
    let scrollLink = $('.navItem');
    let projectSectionTop = $('#projects').offset().top;

    // ACTIVE NAV BAR ITEMS
    $(window).scroll(function() {
        // where we are currently on the screen
        let scrollbarLocation = $(this).scrollTop() + $('header').innerHeight() + 5;

        scrollLink.each(function(){
            // calculate how far from the top each section is REGULARLY
            let sectionOffset = $(this.hash).offset().top;
            // adding active class to nav items
            if ( sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
            // if scroll is above the project section remove active class
            if (scrollbarLocation <= projectSectionTop) {
                $(this).removeClass('active');
            }
        })
    })
})