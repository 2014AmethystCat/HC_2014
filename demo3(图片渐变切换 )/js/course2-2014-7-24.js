/**
 * Created by Hc on 2014/7/24.
 * @param conf={conf1,conf2,conf3...}
 */
const IMG_WIDTH = 520;
$(function () {
    var view = $(".promo");
    var pipe = $(".promo-bd>div");
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
    }).mouseout(function () {
        handle.hide();
    });

    slide(pipe,pipeItem,navDot,1);//只能从1开始
});

function slide($obj,$subObj,$nav,i) {
    setNav( $nav.eq(i-1) );
    $obj.animate({left:-i * IMG_WIDTH},3000, function () {
        i++;
        if (i == $subObj.length - 1 ) {
            i = 0;
            $obj.css("left", -i * IMG_WIDTH);
            i++;
        }
        slide($obj,$subObj,$nav,i);
    });
}

function setNav($nav) {
    $nav.addClass("selected").siblings().removeClass("selected");
}


