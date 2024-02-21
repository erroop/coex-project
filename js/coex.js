$(function(){
    // HeaderSearchBar click ===============================================
    const HeaderSearch = $(".HeaderSearch-link");
    const HeaderSearchBar = $(".HeaderSearchBar");

    HeaderSearch.find(".HeaderSearch-open").click(function(){
        HeaderSearch.find(".HeaderSearch-open").css({display: "none"})
        HeaderSearch.find(".HeaderSearch-close").css({display: "block"})
        HeaderSearchBar.css({display: "block"})
    })
    HeaderSearch.find(".HeaderSearch-close").click(function(){
        HeaderSearch.find(".HeaderSearch-open").css({display: "block"})
        HeaderSearch.find(".HeaderSearch-close").css({display: "none"})
        HeaderSearchBar.css({display: "none"})
    })

    // HeroSlideText ==============================================
    const HeroSlideTitleText = $(".HeroSlideTitleText");
    const HeroSlideTextInfo_date = $(".HeroSlideTextInfo-date");
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

    // MainEventSlideItem MouseOver ==========================
    const MainEventSlideItem = $(".MainEventSlideItem");
    MainEventSlideItem.mouseover(function(){
        $(this).children(".MainEventSlideItem-img").css({opacity : 1})
    }).mouseleave(function(){
        $(this).children(".MainEventSlideItem-img").css({opacity : 0})
    })

    //MainTicket-inner-slide-btn click
    const MainTicket_inner_slide = $(".MainTicket-inner-slide");
    const MainTicket_inner_slide_wrap = $(".MainTicket-inner-slide-wrap");
    const MainTicket_inner_slide_btn_left = $(".MainTicket-inner-slide-btn-left");
    const MainTicket_inner_slide_btn_right = $(".MainTicket-inner-slide-btn-right");
    let MainTicket_count = 0;
    const MainTicket_indicator_right = () => {
        if(MainTicket_count === 0){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*1) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count++;
        }
        else if(MainTicket_count === 1){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*2) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count++;
        }
        else if(MainTicket_count === 2){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*3) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count++;
        }
        else if(MainTicket_count === 3){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*4) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count++;
        }
        else if(MainTicket_count === 4){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*5) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).addClass("focus");
            MainTicket_count++;
        }
    }
    MainTicket_inner_slide_btn_right.click(MainTicket_indicator_right)
    const MainTicket_indicator_left = () =>{
        if(MainTicket_count === 5){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*4) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count--;
        }
        else if(MainTicket_count === 4){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*3) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count--;
        }
        else if(MainTicket_count === 3){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*2) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count--;
        }
        else if(MainTicket_count === 2){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*1) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count--;
        }
        else if(MainTicket_count === 1){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*0) + "px)"});
            MainTicket_inner_slide_wrap_indicator.find("span").eq(0).addClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
            MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
            MainTicket_count--;
        }
    }
    MainTicket_inner_slide_btn_left.click(MainTicket_indicator_left)

    //MainTicket-inner-slide-btn indicator
    const MainTicket_inner_slide_wrap_indicator = $(".MainTicket-inner-slide-wrap-indicator")
    let MainTicket_indicator_html = ""
    MainTicket_inner_slide_wrap.find(".MainTicketItem").each(function(){
        MainTicket_indicator_html += "<span></span>"
        MainTicket_inner_slide_wrap_indicator.html(MainTicket_indicator_html);
    })
    MainTicket_inner_slide_wrap_indicator.find("span").eq(0).addClass("focus");

    MainTicket_inner_slide_wrap_indicator.find("span").eq(0).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*0) + "px)"});
        MainTicket_inner_slide_wrap_indicator.find("span").eq(0).addClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
        MainTicket_count = 0;
    })
    MainTicket_inner_slide_wrap_indicator.find("span").eq(1).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*1) + "px)"});
        MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(1).addClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
        MainTicket_count = 1;
    })
    MainTicket_inner_slide_wrap_indicator.find("span").eq(2).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*2) + "px)"});
        MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(2).addClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
        MainTicket_count = 2;
    })
    MainTicket_inner_slide_wrap_indicator.find("span").eq(3).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*3) + "px)"});
        MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(3).addClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
        MainTicket_count = 3;
    })
    MainTicket_inner_slide_wrap_indicator.find("span").eq(4).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*4) + "px)"});
        MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(4).addClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(5).removeClass("focus");
        MainTicket_count = 4;
    })
    MainTicket_inner_slide_wrap_indicator.find("span").eq(5).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*5) + "px)"});
        MainTicket_inner_slide_wrap_indicator.find("span").eq(0).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(1).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(2).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(3).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(4).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(5).addClass("focus");
        MainTicket_count = 5;
    })

})