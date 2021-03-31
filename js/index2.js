function myFunction(x) {
    if (x.matches) {
        

        $(window).on('scroll', function() {
            console.log( $(this).scrollTop() );
        });
        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll > 1600){
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
        
            if (scroll > 1700){
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
                $('.curntext').removeClass("txtclick");
            }
            else{
                $('.rotatingm').addClass("cmen");
                $('.sside').addClass("cside");
                $('body').addClass("pagesize");
                $('.curntext').addClass("txtclick");
            }
        
        
        });
        
        




    } else {
        


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
                $('.curntext').removeClass("txtclick");
            }
            else{
                $('.rotatingm').addClass("cmen");
                $('.sside').addClass("cside");
                $('body').addClass("pagesize");
                $('.curntext').addClass("txtclick");
            }
        
        
        });
        
        



    }
  }
  
  var x = window.matchMedia("(max-width: 1440px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes