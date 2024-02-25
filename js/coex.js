$(function(){
    // guide mouseover =====================================
    const menu_item_102 = $(".menu-item-102 a");
    const menu_item_102_sub_menu = $(".menu-item-102-sub-menu")
    menu_item_102.mouseover(function(){
        menu_item_102_sub_menu.css({display:"flex"})
    })
    menu_item_102_sub_menu.mouseleave(function(){
        menu_item_102_sub_menu.css({display:"none"})
    })

    // tablet, mobile menu click
    const ResponseNav = $(".ResponseNav");
    const Mene_Wrap = $(".menu-wrap");
    let ResponseNav_count = 0;
    ResponseNav.click(function(){
        if(ResponseNav_count === 0){
            Mene_Wrap.css({display : 'block'})
            ResponseNav_count ++;
        }
        else if(ResponseNav_count === 1){
            Mene_Wrap.css({display : 'none'})
            ResponseNav_count --;
        }
    })

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
    const HeroSlide_indicator = (first_index, second_index, third_index) =>{
        HeroSlide_thumb_indicator.find("span").eq(first_index).addClass("focus")
        HeroSlide_thumb_indicator.find("span").eq(second_index).removeClass("focus")
        HeroSlide_thumb_indicator.find("span").eq(third_index).removeClass("focus")
    }
    const slidethumb = () => {
        if(index === 0){
            HeroSlide_thumb_wrap.css({transform : "translateX(" + -(HeroSlide_thumb.width() * 0) + "px)"})
            HeroSlide_indicator(0, 1, 2)
            index ++;
        }
        else if(index === 1){
            HeroSlide_thumb_wrap.css({transform : "translateX(" + -(HeroSlide_thumb.width() * 1) + "px)"})
            HeroSlide_indicator(1, 0, 2)
            index ++;
        }
        else if(index === 2){
            HeroSlide_thumb_wrap.css({transform : "translateX(" + -(HeroSlide_thumb.width() * 2) + "px)"})
            HeroSlide_indicator(2, 0, 1)
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
    const MainTicket_indicator = (first_index, second_index, third_index, four_index, fivem_index, six_index) => {
        MainTicket_inner_slide_wrap_indicator.find("span").eq(first_index).addClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(second_index).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(third_index).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(four_index).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(fivem_index).removeClass("focus");
        MainTicket_inner_slide_wrap_indicator.find("span").eq(six_index).removeClass("focus");
    };

    const MainTicket_indicator_right = () => {
        if(MainTicket_count === 0){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*1) + "px)"});
            MainTicket_indicator(1, 0, 2, 3, 4, 5)
            MainTicket_count++;
        }
        else if(MainTicket_count === 1){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*2) + "px)"});
            MainTicket_indicator(2, 0, 1, 3, 4, 5)
            MainTicket_count++;
        }
        else if(MainTicket_count === 2){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*3) + "px)"});
            MainTicket_indicator(3, 0, 1, 2, 4, 5)
            MainTicket_count++;
        }
        else if(MainTicket_count === 3){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*4) + "px)"});
            MainTicket_indicator(4, 0, 1, 2, 3, 5)
            MainTicket_count++;
        }
        else if(MainTicket_count === 4){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*5) + "px)"});
            MainTicket_indicator(5, 0, 1, 2, 3, 4)
            MainTicket_count++;
        }
    };
    MainTicket_inner_slide_btn_right.click(MainTicket_indicator_right);

    const MainTicket_indicator_left = () =>{
        if(MainTicket_count === 5){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*4) + "px)"});
            MainTicket_indicator(4, 0, 1, 2, 3, 5)
            MainTicket_count--;
        }
        else if(MainTicket_count === 4){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*3) + "px)"});
            MainTicket_indicator(3, 0, 1, 2, 4, 5)
            MainTicket_count--;
        }
        else if(MainTicket_count === 3){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*2) + "px)"});
            MainTicket_indicator(2, 0, 1, 3, 4, 5)
            MainTicket_count--;
        }
        else if(MainTicket_count === 2){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*1) + "px)"});
            MainTicket_indicator(1, 0, 2, 3, 4, 5)
            MainTicket_count--;
        }
        else if(MainTicket_count === 1){
            MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*0) + "px)"});
            MainTicket_indicator(0, 1, 2, 3, 4, 5)
            MainTicket_count--;
        }
    };
    MainTicket_inner_slide_btn_left.click(MainTicket_indicator_left);

    //MainTicket-inner-slide-btn indicator
    const MainTicket_inner_slide_wrap_indicator = $(".MainTicket-inner-slide-wrap-indicator")
    let MainTicket_indicator_html = ""
    MainTicket_inner_slide_wrap.find(".MainTicketItem").each(function(){
        MainTicket_indicator_html += "<span></span>"
        MainTicket_inner_slide_wrap_indicator.html(MainTicket_indicator_html);
    });

    MainTicket_inner_slide_wrap_indicator.find("span").eq(0).addClass("focus");

    MainTicket_inner_slide_wrap_indicator.find("span").eq(0).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*0) + "px)"});
        MainTicket_indicator(0, 1, 2, 3, 4, 5)
        MainTicket_count = 0;
    });

    MainTicket_inner_slide_wrap_indicator.find("span").eq(1).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*1) + "px)"});
        MainTicket_indicator(1, 0, 2, 3, 4, 5)
        MainTicket_count = 1;
    });

    MainTicket_inner_slide_wrap_indicator.find("span").eq(2).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*2) + "px)"});
        MainTicket_indicator(2, 0, 1, 3, 4, 5)
        MainTicket_count = 2;
    });

    MainTicket_inner_slide_wrap_indicator.find("span").eq(3).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*3) + "px)"});
        MainTicket_indicator(3, 0, 1, 2, 4, 5)
        MainTicket_count = 3;
    });

    MainTicket_inner_slide_wrap_indicator.find("span").eq(4).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*4) + "px)"});
        MainTicket_indicator(4, 0, 1, 2, 3, 5)
        MainTicket_count = 4;
    });

    MainTicket_inner_slide_wrap_indicator.find("span").eq(5).click(function(){
        MainTicket_inner_slide_wrap.css({transform : "translateX(" +-(MainTicket_inner_slide.width()*5) + "px)"});
        MainTicket_indicator(5, 0, 1, 2, 3, 4)
        MainTicket_count = 5;
    })

    // MainNewsList click
    const list_title = $(".MainNewsListInfo-list .MainNewsListInfo-list-item");
    const MainnewsList = $(".MainNewesList-list");
    const list_change = (index, content, second_content, third_content , first_index, second_index) => {
        MainnewsList.find(".MainNewsList-list-item").eq(index).find(".MainNewsList-list-item-date-day").text(content);
        MainnewsList.find(".MainNewsList-list-item").eq(index).find(".MainNewsList-list-item-date-month").text(second_content);
        MainnewsList.find(".MainNewsList-list-item").eq(index).find(".MainNewsList-list-item-title").text(third_content);
        list_title.eq(first_index).find("a").removeClass("MainNewsListInfo-list-item-click-on")
        list_title.eq(first_index).find("a").addClass("MainNewsListInfo-list-item-click-off")
        list_title.eq(second_index).find("a").removeClass("MainNewsListInfo-list-item-click-off")
        list_title.eq(second_index).find("a").addClass("MainNewsListInfo-list-item-click-on")
    }


    list_title.eq(0).click(function(){
        list_change(0, "16", "2023.10", "[채용공고]2024년도 코엑스 신입 및 경력사원 채용", 1, 0)
        list_change(1, "04", "2023.10", "2024년도 코엑스 전시장 서비스협력업체 등록 공고")
        list_change(2, "09", "2023.08", "Coex Jamboree Lounge(코엑스 잼버리 문화체험 프로그램 및 라운지 운영)")
        list_change(3, "08", "2023.05", "코엑스 전시장 현장관리 담당자 (홀매니저) 채용 공고")
        
    })

    list_title.eq(1).click(function(){
        list_change(0, "21", "2024.02", "코엑스 회의실 집기세팅 운영용역 업체 선정", 0, 1)
        list_change(1, "20", "2024.02", "무역센터 아셈타워 메일센터 운영 용역")
        list_change(2, "15", "2024.02", "2024년 무역센터 공조기용 인버터 교체공사")
        list_change(3, "15", "2024.02", "무역센터 아셈타워 스프링클러배관 교체 추가공사(6차)")
    })

    // Topbutton =====================================
    const TopButton = $(".TopButton");
    TopButton.click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    })

})