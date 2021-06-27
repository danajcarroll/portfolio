// 
$("nav a[href^='#']").click(function (e) {
    // prevents browser from doing a default click
    e.preventDefault();

    // finds the position of selected link/ID
    let idPos = $($(this).attr("href")).offset().top - $("header").innerHeight();

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