$("#natilation").click(function(){


    if ($('.picling').hasClass("piclinghover")){
        $(".picting").removeClass("cmen");
        $('.navlinks').removeClass("flippingnav");
        $('.sside').removeClass("cside");
        $('body').removeClass("pagesize");
    }
    else{
        $('.rotatingm').addClass("cmen");
        $('.sside').addClass("cside");
        $('body').addClass("pagesize");}


});