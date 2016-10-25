/**
 * Created by Administrator on 2016/10/14 0014.
 */
function getStyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
    }else if(elem.currentStyle){
        return elem.currentStyle[prop];
    }
}