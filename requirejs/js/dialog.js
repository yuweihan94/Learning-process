define(['jquery'],function($){
    function Dialog(settings){
        this.defaultSettings = {
            width: 400,
            height: 300,
            title: "µ¯³ö²ã",
            content: ""
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open = function(){
        this.$container.append(this.$mask).append(this.$box);
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        $("body").append(this.$container);
    };
    return Dialog
});
