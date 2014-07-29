/**
 * Created by Hc on 2014/7/24.
 * @param conf={conf1,conf2,conf3...}
 */
const IMG_WIDTH = 520;
$(function () {
    var view = $(".promo");
    var pipe = $(".promo-bd>div");


    var  pipeItemFirst = $(".promo-bd>div>div").first();
    var  pipeItemLast = $(".promo-bd>div>div").last();

    pipeItemFirst.clone(true).appendTo(pipe);
    pipeItemLast.clone(true).prependTo(pipe);

    var pipeItem = $(".promo-bd>div>div");
    pipe.width(pipeItem.length * IMG_WIDTH);

    slide(pipe,pipeItem,1);//只能从1开始
});

function slide($obj,$subObj,i) {
    $obj.animate({left:-i * IMG_WIDTH},2000, function () {
        i++;
        if (i == $subObj.length - 1 ) {
            i = 0;
            $obj.css("left", -i * IMG_WIDTH);
            i++;
        }
        slide($obj,$subObj,i);
    });
}


