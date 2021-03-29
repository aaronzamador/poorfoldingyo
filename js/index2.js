$("#natilation").click(function(){


    if ($('.rotatingm').hasClass("cmen")){
        $(".rotatingm").removeClass("cmen");
        $('.sside').removeClass("cside");
        $('body').removeClass("pagesize");
    }
    else{
        $('.rotatingm').addClass("cmen");
        $('.sside').addClass("cside");
        $('body').addClass("pagesize");}


});