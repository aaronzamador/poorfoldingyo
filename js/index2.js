$("#natilation").click(function(){


    if ($('.rotatingm').hasClass("cmen")){
        $(".rotatingm").removeClass("cmen");
        $('.sside').removeClass("cside");
        $('body').removeClass("pagesize");
        $('.hex').removeClass("sideclick");
        $('.curntext').removeClass("curnsideclick");
    }
    else{
        $('.rotatingm').addClass("cmen");
        $('.sside').addClass("cside");
        $('body').addClass("pagesize");
        $('.hex').addClass("sideclick");
        $('.curntext').addClass("curnsideclick");}


});