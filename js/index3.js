$(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 2400){
        if ($(".borderbottom").hasClass("borderbottomafter")){

        }
        else{
            $(".borderbottom").addClass("borderbottomafter")
        }
    } 
    else{
        $(".borderbottom").removeClass("borderbottomafter")}
});





$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var delayInMilliseconds = 500;

    if (scroll > 2500){
        if ($(".hex").hasClass("show")){

        }
        else{
            $(".hex").addClass("show");setTimeout(function() {
            $(".curntext").addClass("curntextscroll");}, delayInMilliseconds);
        }
    } 
    else{
        $(".curntext").removeClass("curntextscroll");
        $(".hex").removeClass("show");
    }
});




$("#natilation").click(function(){


    if ($('.rotatingm').hasClass("cmen")){
        $(".rotatingm").removeClass("cmen");
        $('.sside').removeClass("cside");
        $('body').removeClass("pagesize");
        $('.hex').removeClass("sideclick");
    }
    else{
        $('.rotatingm').addClass("cmen");
        $('.sside').addClass("cside");
        $('body').addClass("pagesize");
        $('.hex').addClass("sideclick");}


});