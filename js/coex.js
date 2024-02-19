$(function(){

    // HeroSlideText ==============================================
    const HeroSlideTitleText = $(".HeroSlideTitleText")
    const HeroSlideTextInfo_date = $(".HeroSlideTextInfo-date")
    const HeroSlideTextInfo_location = $(".HeroSlideTextInfo-location");
    let count = 1;
    setTimeout(()=>{
        HeroSlideTitleText.css({transform : "translateY(" + $(".HeroSlideTitleText").height() + "px)", opacity : 0 , transition : "none"});
    },3200)
    const slidetitle = () => {
        if(count === 0){
            HeroSlideTitleText.css({transform : "translateY(0px)", opacity : 1, transition : "all 1s"})
            HeroSlideTitleText.html("제29회 <br> 서울리빙디자인페어")
            HeroSlideTextInfo_date.html("2024.02.28-2024.03.03");
            HeroSlideTextInfo_location.html("HALL  A, B, C, D");
            setTimeout(()=>{
                HeroSlideTitleText.css({transform : "translateY(" + $(".HeroSlideTitleText").height() + "px)", opacity : 0 , transition : "none"});
            },3300)
            count ++;
        }
        else if(count === 1){
            HeroSlideTitleText.css({transform : "translateY(0px)", opacity : 1, transition : "all 1s"})
            HeroSlideTitleText.html("EV 트렌드 코리아 2024")
            HeroSlideTextInfo_date.html("2024.03.06-2024.03.08")
            HeroSlideTextInfo_location.html("HALL  A")
            setTimeout(()=>{
                HeroSlideTitleText.css({transform : "translateY(" + $(".HeroSlideTitleText").height() + "px)", opacity : 0 , transition : "none"});
            },3300)
            count ++;
        }
        else if(count === 2){
            HeroSlideTitleText.css({transform : "translateY(0px)", opacity : 1, transition : "all 1s"})
            HeroSlideTitleText.html("인터배터리 2024")
            HeroSlideTextInfo_date.html("2024.03.06-2024.03.08")
            HeroSlideTextInfo_location.html("HALL  A, B, C, D, The Platz, 컨퍼런스룸E")
            setTimeout(()=>{
                HeroSlideTitleText.css({transform : "translateY(" + $(".HeroSlideTitleText").height() + "px)", opacity : 0 , transition : "none"});
            },3300)
            count = 0;
        }
    }
    setInterval(slidetitle, 3500)

    // HeroSlidethumb =========================================
    const HeroSlide_thumb = $(".HeroSlide-thumb");
    const HeroSlide_thumb_wrap = $(".HeroSlide-thumb-wrap");
    let index = 1;
    const slidethumb = () => {
        if(index === 0){
            HeroSlide_thumb_wrap.css({transform : "translateX(" + -(HeroSlide_thumb.width() * 0) + "px)"})
            HeroSlide_thumb_indicator.find("span").eq(0).addClass("focus")
            HeroSlide_thumb_indicator.find("span").eq(1).removeClass("focus")
            HeroSlide_thumb_indicator.find("span").eq(2).removeClass("focus")
            index ++;
        }
        else if(index === 1){
            HeroSlide_thumb_wrap.css({transform : "translateX(" + -(HeroSlide_thumb.width() * 1) + "px)"})
            HeroSlide_thumb_indicator.find("span").eq(0).removeClass("focus")
            HeroSlide_thumb_indicator.find("span").eq(1).addClass("focus")
            HeroSlide_thumb_indicator.find("span").eq(2).removeClass("focus")
            index ++;
        }
        else if(index === 2){
            HeroSlide_thumb_wrap.css({transform : "translateX(" + -(HeroSlide_thumb.width() * 2) + "px)"})
            HeroSlide_thumb_indicator.find("span").eq(0).removeClass("focus")
            HeroSlide_thumb_indicator.find("span").eq(1).removeClass("focus")
            HeroSlide_thumb_indicator.find("span").eq(2).addClass("focus")
            index = 0;
        }
    }
    setInterval(slidethumb , 3500)

    // HeroSlidethumb indicator ===============================
    let innerText = ""
    const HeroSlide_thumb_indicator = $(".HeroSlide-thumb-indicator");
    HeroSlide_thumb_wrap.find("div").each(function(){
        innerText += "<span></span>"
        HeroSlide_thumb_indicator.html(innerText);
    })
    HeroSlide_thumb_indicator.find("span").eq(0).addClass("focus");

})