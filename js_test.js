(function($){
    $.fn.removeAni = function(){
        this.each(function(index){
           var $target = $(this);
            $target.delay(index*1000).animate({height:0},500,function(){
                $target.remove();
            })
        });
        return this;
    }
})(jQuery);

$(document).ready(function(){
    $(".menu li").removeAni();
});