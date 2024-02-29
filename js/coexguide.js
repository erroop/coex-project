$(function(){
    if($(window).width() > 1025){
        // guide mouseover =====================================
            const menu_item_102 = $(".menu-item-102 a");
            const menu_item_102_sub_menu = $(".menu-item-102-sub-menu")
            menu_item_102.mouseover(function(){
                menu_item_102_sub_menu.css({display:"flex"})
            })
            menu_item_102_sub_menu.mouseleave(function(){
                menu_item_102_sub_menu.css({display:"none"})
            })
        }
    if($(window).width() < 1024){
        // guide mouseover =====================================
            const menu_item_102 = $(".menu-item-102 a");
            const menu_item_102_sub_menu = $(".menu-item-102-sub-menu")
            let menu_item_102_count = 0;
            menu_item_102.click(function(){
                if(menu_item_102_count === 0){
                    menu_item_102_sub_menu.css({display:"block"});
                    menu_item_102_count ++;
                    console.log("lala")
                }
                else if(menu_item_102_count === 1){
                    menu_item_102_sub_menu.css({display:"none"});
                    menu_item_102_count --;
                }
            })
        }

      // Topbutton =====================================
      const TopButton = $(".TopButton");
      TopButton.click(function(){
          window.scrollTo({top : 0, behavior: 'smooth'}); 
      })

    // tablet, mobile menu click
    const ResponseNav = $(".ResponseNav");
    const Mene_Wrap = $(".menu-wrap");
    const menu_item_102_sub_menu = $(".menu-item-102-sub-menu");
    let ResponseNav_count = 0;
    ResponseNav.click(function(){
        if(ResponseNav_count === 0){
            Mene_Wrap.css({display : 'block'})
            ResponseNav_count ++;
        }
        else if(ResponseNav_count === 1){
            Mene_Wrap.css({display : 'none'})
            menu_item_102_sub_menu.css({display:"none"});
            ResponseNav_count --;
        }
    })

    // MapList traffic click ====================================
    const MapPageList = $(".MapMeansList li");
    const SubCntList = $(".SubCnt .MapPageListSubCnt-item")
    const MapImg = $(".MapImg img")

    // first moment ---------------------------------
    MapPageList.eq(0).find("a").css({color : "#F246AC"});
    MapPageList.eq(0).find(".MapMeans-icon").css("background-image" , "url(./img/ico_train_a.svg)")
    SubCntList.eq(0).find(".MapPageList-item").eq(0).addClass("is-current");
    SubCntList.eq(0).css({display:"block"})
    
    // mapList function ----------------------------------
      const SubList_in_out = (first, second, third, four) => {
        SubCntList.eq(first).css({display: "block"})
        SubCntList.eq(second).css({display: "none"})
        SubCntList.eq(third).css({display: "none"})
        SubCntList.eq(four).css({display: "none"})
      }

    // Train icon click ---------------------------------------
    MapPageList.eq(0).click(function(){
        // icon 컬러 변경
        MapPageList.eq(0).find(".MapMeans-icon").css("background-image" , "url(./img/ico_train_a.svg)")
        MapPageList.eq(1).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bus.svg)")
        MapPageList.eq(2).find(".MapMeans-icon").css("background-image" , "url(./img/ico_car.svg)")
        MapPageList.eq(3).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bicycle.svg)")

        // text 컬러 변경
        MapPageList.find("a").css({color:"black"})
        $(this).find("a").css({color : "#F246AC"})
        
        
        // 교통방법 리스트 변경
        SubList_in_out(0, 1, 2, 3);

        SubCntList.eq(0).find(".MapPageList-item").removeClass("is-current");
        SubCntList.eq(0).find(".MapPageList-item").eq(0).addClass("is-current");
        MapImg.attr("src" , "./img/train_maps1.jpg")
    })

    // Train subList click ------------------------------------------
    SubCntList.eq(0).find(".MapPageList-item").click(function(){
        SubCntList.eq(0).find(".MapPageList-item").removeClass("is-current");
        $(this).addClass("is-current")
    })

    // Train subList click img --------------------------------------
    SubCntList.eq(0).find(".MapPageList-item").eq(0).click(function(){
        MapImg.attr("src" , "./img/train_maps1.jpg");
        MapImg.attr("attr" , "2호선 삼성역에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(0).find(".MapPageList-item").eq(1).click(function(){
        MapImg.attr("src" , "./img/train_maps2.jpg");
        MapImg.attr("attr" , "9호선 봉은사에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(0).find(".MapPageList-item").eq(2).click(function(){
        MapImg.attr("src" , "./img/train_maps3.jpg");
        MapImg.attr("attr" , "7호선 청담역에서 코엑스를 확인 할 수 있는 지도");
    })

    //Buss icon click -------------------------------------------
    MapPageList.eq(1).click(function(){
        // icon 컬러 변경
        MapPageList.eq(0).find(".MapMeans-icon").css("background-image" , "url(./img/ico_train.svg)")
        MapPageList.eq(1).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bus_a.svg)")
        MapPageList.eq(2).find(".MapMeans-icon").css("background-image" , "url(./img/ico_car.svg)")
        MapPageList.eq(3).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bicycle.svg)")

        // text 컬러 변경
        MapPageList.find("a").css({color:"black"})
        $(this).find("a").css({color : "#F246AC"})

        // 교통방법 리스트변경
        SubList_in_out(1, 0, 2, 3);

        SubCntList.eq(1).find(".MapPageList-item").removeClass("is-current");
        SubCntList.eq(1).find(".MapPageList-item").eq(0).addClass("is-current");
        MapImg.attr("src" , "./img/bus_maps1.jpg")
    })

     // Buss subList click ------------------------------------------
     SubCntList.eq(1).find(".MapPageList-item").click(function(){
        SubCntList.eq(1).find(".MapPageList-item").removeClass("is-current");
        $(this).addClass("is-current")
    })

    // Buss subList click img --------------------------------------
    SubCntList.eq(1).find(".MapPageList-item").eq(0).click(function(){
        MapImg.attr("src" , "./img/bus_maps1.jpg");
        MapImg.attr("attr" , "한국무역센터.삼성역에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(1).find(".MapPageList-item").eq(1).click(function(){
        MapImg.attr("src" , "./img/bus_mapss2.jpg");
        MapImg.attr("attr" , "9코엑스아티움(무역센터) 앞에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(1).find(".MapPageList-item").eq(2).click(function(){
        MapImg.attr("src" , "./img/bus_maps3.jpg");
        MapImg.attr("attr" , "무역센터 (코엑스 동문 앞)에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(1).find(".MapPageList-item").eq(3).click(function(){
        MapImg.attr("src" , "./img/bus_maps4.jpg");
        MapImg.attr("attr" , "봉은사.코엑스북문에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(1).find(".MapPageList-item").eq(4).click(function(){
        MapImg.attr("src" , "./img/bus_mapss5.jpg");
        MapImg.attr("attr" , "삼성역 7번 출구에서 코엑스를 확인 할 수 있는 지도");
    })

    //car icon click -------------------------------------------
    MapPageList.eq(2).click(function(){
        // icon 컬러 변경
        MapPageList.eq(0).find(".MapMeans-icon").css("background-image" , "url(./img/ico_train.svg)")
        MapPageList.eq(1).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bus.svg)")
        MapPageList.eq(2).find(".MapMeans-icon").css("background-image" , "url(./img/ico_car_a.svg)")
        MapPageList.eq(3).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bicycle.svg)")

        // text 컬러 변경
        MapPageList.find("a").css({color:"black"})
        $(this).find("a").css({color : "#F246AC"})
        
        // 교통방법 리스트변경
        SubList_in_out(2, 0, 1, 3);

        SubCntList.eq(2).find(".MapPageList-item").removeClass("is-current");
        SubCntList.eq(2).find(".MapPageList-item").eq(0).addClass("is-current");
        MapImg.attr("src" , "./img/car_maps1.jpg")
    })

    // car subList click ------------------------------------------
     SubCntList.eq(2).find(".MapPageList-item").click(function(){
        SubCntList.eq(2).find(".MapPageList-item").removeClass("is-current");
        $(this).addClass("is-current")
    })

    // car subList click img --------------------------------------
    SubCntList.eq(2).find(".MapPageList-item").eq(0).click(function(){
        MapImg.attr("src" , "./img/car_maps1.jpg");
        MapImg.attr("attr" , "강남역 방면에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(2).find(".MapPageList-item").eq(1).click(function(){
        MapImg.attr("src" , "./img/car_maps2.jpg");
        MapImg.attr("attr" , "대치동 방면에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(2).find(".MapPageList-item").eq(2).click(function(){
        MapImg.attr("src" , "./img/car_maps3.jpg");
        MapImg.attr("attr" , "잠실역 방면에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(2).find(".MapPageList-item").eq(3).click(function(){
        MapImg.attr("src" , "./img/car_maps4.jpg");
        MapImg.attr("attr" , "강남 고속터미널 방면 1에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(2).find(".MapPageList-item").eq(4).click(function(){
        MapImg.attr("src" , "./img/car_maps5.jpg");
        MapImg.attr("attr" , "강남 고속터미널 방면 2에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(2).find(".MapPageList-item").eq(5).click(function(){
        MapImg.attr("src" , "./img/car_maps6.jpg");
        MapImg.attr("attr" , "영동대교 방면 1에서 코엑스를 확인 할 수 있는 지도");
    })
    SubCntList.eq(2).find(".MapPageList-item").eq(6).click(function(){
        MapImg.attr("src" , "./img/car_maps7.jpg");
        MapImg.attr("attr" , "영동대교 방면 2에서 코엑스를 확인 할 수 있는 지도");
    })

    //bicycle icon click -------------------------------------------
    MapPageList.eq(3).click(function(){
        // icon 컬러 변경
        MapPageList.eq(0).find(".MapMeans-icon").css("background-image" , "url(./img/ico_train.svg)")
        MapPageList.eq(1).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bus.svg)")
        MapPageList.eq(2).find(".MapMeans-icon").css("background-image" , "url(./img/ico_car.svg)")
        MapPageList.eq(3).find(".MapMeans-icon").css("background-image" , "url(./img/ico_bicycle_a.svg)")

        // text 컬러 변경
        MapPageList.find("a").css({color:"black"})
        $(this).find("a").css({color : "#F246AC"})
        
        // 교통방법 리스트변경
        SubCntList.css({display : "none"})

        SubCntList.eq(3).find(".MapPageList-item").removeClass("is-current");
        SubCntList.eq(3).find(".MapPageList-item").eq(0).addClass("is-current");
        MapImg.attr("src" , "./img/bicycle_maps1.jpg")
    })

    // car subList click ------------------------------------------
    SubCntList.eq(3).find(".MapPageList-item").click(function(){
        SubCntList.eq(3).find(".MapPageList-item").removeClass("is-current");
        $(this).addClass("is-current")
    })

})