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

// ABOUT ME ANIMATION BUTTONS
function eraseAnimation() {
    gsap.to('.hobby', {
        x: '100%',
        opacity: 0
    })
}
function eraseText() {
    gsap.from('.aboutTitle', {
        x: '-100%',
        opacity: 0
    })
    gsap.from('.hobby', {
        x: '-100%',
        opacity: 0
    })
    gsap.from('#aboutText', {
        x: '-100%',
        opacity: 0
    })
}
function addText() {
    gsap.from('.aboutTitle', {
        x: '-100%',
        opacity: 0
    })
    gsap.from('.hobby', {
        x: '-100%',
        opacity: 0
    })
    gsap.from('#aboutText', {
        x: '-100%',
        opacity: 0
    })
}

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
            if ( sectionOffset <= scrollbarLocation ) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
            // if scroll is above the project section remove active class
            if (scrollbarLocation <= projectSectionTop) {
                $(this).removeClass('active');
            }
        })
    })

    let animateButtons = $('.animate');
    
    animateButtons.each(function() {
        $(this).click(function() {
            eraseAnimation();
            eraseText();
            $(this).addClass('activeButton');
            $(this).siblings().removeClass('activeButton');
        })
    })
    $('#animation1').click(function() {
        $('.videoGames').show();
        $('.travelling').hide();
        $('.nextHobby').hide();
        
        $('.aboutTitle').html('VIDEO GAMES');
        $('#aboutText').html("I'm a lover of visual novels and point and click adventure games.");
    })
    $('#animation2').click(function() {
        $('.travelling').show();
        $('.videoGames').hide();
        $('.nextHobby').hide();
        
        $('.aboutTitle').html('TRAVELLING');
        $('#aboutText').html("I love going to different places, I also love plane food.");
    })
    $('#animation3').click(function() {
        $('.travelling').hide();
        $('.videoGames').hide();
        $('.nextHobby').show();

        $('.aboutTitle').html('SKATING');
        $('#aboutText').html("I actually have no clue what this hobby is going to be just yet.");
    })

})