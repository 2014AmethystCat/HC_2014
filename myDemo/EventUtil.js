/**
 * Created by Administrator on 2014/7/23.
 * 默认采用事件冒泡
 * @param element:要操作的元素； type:事件名称；handler:事件 处理程序函数
 */

var EventUtil = {
    addHandler : function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }else if (element.attachEvent) {
            element.attachEvent("on"+type, handler);
        }else {
            element["on"+type] = handler;
        }
  },
    removeHandler : function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if (element.detachEvent) {
            element.detachEvent("on"+type, handler);
        }else {
            element["on"+type] = null;
        }

    }
};

