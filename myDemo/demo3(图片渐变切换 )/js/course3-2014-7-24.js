/**
 * Created by Hc on 2014/7/24.
 * @param conf={conf1,conf2,conf3...}
 */

$(function () {
    var index = 1;
    var timer = null;
    var IMG_WIDTH = 520;

    var view = $(".promo");
    var pipe = $(".promo-bd>div");//传送带
    var navDot = $(".promo-nav>li");//导航小圆点
    var handle = $( ".promo-opt" );//左右箭头容器


    var  pipeItemFirst = $(".promo-bd>div>div").first();
    var  pipeItemLast = $(".promo-bd>div>div").last();

    pipeItemFirst.clone(true).appendTo(pipe);
    pipeItemLast.clone(true).prependTo(pipe);

    var pipeItem = $(".promo-bd>div>div");
    pipe.width(pipeItem.length * IMG_WIDTH);

    view.mouseover(function () {
        handle.show();
        clearInterval(timer);
    }).mouseout(function () {
        handle.hide();
        setTimer();
    });

    $(".prev").click(function () {
        if (!pipe.is(":animated")) {
            slide(--index);//自减1后再传入。
        }
    });
    $(".next").click(function () {
        if (!pipe.is(":animated")) {
            slide(++index);//自增1后再传入
        }
    });

    function slide(i) {

        if ( i === 0 ) {
            setNav(navDot.eq(4));
        }else if ( i === pipeItem.length - 1) {
            setNav(navDot.eq(0))
        }else{
            setNav(navDot.eq(i-1))
        }


        pipe.animate({left:-i * IMG_WIDTH},1000, function () {
            if (i === 0 ) {
                pipe.css("left",-(pipeItem.length-2) * IMG_WIDTH);
                index = pipeItem.length - 2;
            }else if ( i === pipeItem.length -1 ) {
                pipe.css("left",-IMG_WIDTH);
                index = 1;
            }

        });
    }

    function setNav($nav) {
        $nav.addClass("selected").siblings().removeClass("selected");
    }

    function setTimer() {
        timer = setInterval(function () {
            $(".next").trigger("click");
        },2000)
    }
    setTimer();
});






