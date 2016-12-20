requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog'],function($,Dialog){
    $('#open').on('click',function(){
        var settings = {
            width : 500,
            height : 400,
            title : 'ÎÒµÄµ¯³ö²ã',
            content : 'form.html'
        }
    });
    var dialog = new Dialog;
    dialog.open();
});