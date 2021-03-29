$(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 2250){
        $(".borderbottom").addClass("borderbottomafter");
    } 
    else{}
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll < 2480){
        $(".borderbottom").removeClass("borderbottomafter");
    } 
    else{}
});