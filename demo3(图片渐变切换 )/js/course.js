/**
 * Created by Hc on 2014/6/23.
 * @param conf={conf1,conf2,conf3...}
 */
function hcCourse(conf) {
    var bigImgCon = document.getElementById("imgCon");
    bigImgCon.style.left = 0;
    var course = new Timer(bigImgCon,100);
    course.start();
}

/**
 *大图片与索引图片间的映射关系
 *
 */
function domMapping() {

}

/**
 * 定时器
 */
function Timer(dom,time) {
    var timer;
    this.time = time;
    this.start = function () {
        var ox = parseInt(dom.style.left);
        console.log(ox);
        if (ox>0) {
            ox-=20;
        }
        if (ox <= -1200) {
            ox += 20;
        }
        dom.
        timer = setTimeout(this.start(),this.time);
    };
    this.destroy = function () {
        clearInterval(timer);
    };
}

