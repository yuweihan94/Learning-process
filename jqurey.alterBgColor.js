/**
 * Created by Administrator on 2016/11/11 0011.
 */
;(function($){
    $.fn.extend({
        'alterBgColor':function(options){
            options = $.extend({
                odd: 'odd',
                even: 'even',
                selected: 'selected'
            },options)
        }
    });
})(jQuery);