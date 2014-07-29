/**
 * Author: huangchun
 * Create on: 2014-7-10
 * Last Updated:
 * 说明:数字键盘组件，用于为触摸设备生成一个可供输入的数字软键盘
 *
 */
PJF.ui.keyboard = PJF.extend(PJF.ui.component,{
    init:function(conf){
        this.valArr = [];
        var me = this;
        if (this.com) {
            var html = "<div class='keyWrapper-hc' id='kk'>" +
                "<span title='1' class='s1 mt12 ml9'>1</span>" +
                "<span title='2' class='s2 mt12'>2</span>" +
                "<span title='3' class='s3 mt12'>3</span>" +
                "<span title='4' class='s4 ml9'>4</span>" +
                "<span title='5' class='s5'>5</span>" +
                "<span title='6' class='s6'>6</span>" +
                "<span title='7' class='s7 ml9'>7</span>" +
                "<span title='8' class='s8'>8</span>" +
                "<span title='9' class='s9'>9</span>" +
                "<span title='-' class='s10 ml9'>-</span>" +
                "<span title='0' class='s0'>0</span>" +
                "<span id='del_hc' class='s11'>回删</span>" +
                "</div>";
            var pos = this.com;
                me.isFirst = true;//键盘创建锁

            pos.parent().css("position","relative");
            pos.bind("click",function() {
                if(me.validateInput(pos) && me.isFirst){
                    pos.parent().append(html);
                    me.isFirst = false;//文本框获取焦点时将click动作上锁，防止在已经获取焦点的情况下重复点击文本框从而弹出多个键盘
                    $("#del_hc").bind("click", function () {
                        if (pos.val()=='') {
                            alert("请输入编号");
                        }else {
                            me.valArr.pop();
                            pos.val(me.valArr.join(''));
                        }
                    });

                    $("#kk span").on("click", function (e) {
                        if ($(this).attr("title")) {
                            me.valArr.push($(this).attr("title"));
                            console.log(me.valArr);
                        }
                        pos.val(me.valArr.join(''));
                        e.stopPropagation();
                    });

                    $("#kk").css({
                        left:pos.offset().left,
                        top:pos.position().top+pos.outerHeight(true)+ 5 +"px"
                    });

                    $("#kk").bind('mousedown',function(){
                        pos.unbind('blur');
                    }).bind('mouseup',function(){
                        pos.focus();
                        pos.bind('blur',function(){
                            $("#kk").remove();
                            me.isFirst = true;//开锁
                        });
                    });
                }
            });
            console.log("x:"+pos.offset().left+"-----"+"Y:"+pos.position().top);
            console.log("w:"+pos.width()+"-----"+"h:"+pos.height());
        }
    },
    validateParam: function (conf) {
        console.log(conf);
        if(conf) {
            return true;
        }else {
            alert("配置错误");
        }
    },
    validateInput:function($dom){
        if($dom.is("input")) {
            return true;
        }else {
            alert("请选择文本框来初始化组件");
            return false;
        }
    },
    destroy: function () {
        $("#kk").remove();
        this.com.unbind("click");
        this.param = null;
        this.com = null;

    },
    getValue: function () {
        if (this.com.val()){
            return this.com.val();
        }else{
            return "没有输入任何值";
        }
    }
});