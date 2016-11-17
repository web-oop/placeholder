function isPlaceholder(){  
    var input = document.createElement('input');  
    if("placeholder" in input){  
        return true;  
    }else{  
        return false;  
    }  
}  
$(function(){  
    if(!isPlaceholder()){  
        $("input[placeholder]").placeholder();  //使用插件   
    }  
});  
(function($) {  
 $.fn.placeholder = function(options) {  
     //这里是默认值    
     var defaults = {  
             tipsattr: "placeholder",  
             color1: "#999",  
             color2: "#000"  
         }  
         //默认值和传入的参数options合并    
     var opts = $.extend(defaults, options);  
     /*    
      *   加上return我的理解是继续返回一个jquery对象，就是我当前操作的input.input-    tips 以便链式调用，例如下面的.height("30px")    
      */  
     return this.each(function() {  
        if ($(this).val() == ""||$(this).val() == $(this).attr(opts.tipsattr)) {  
            $(this).val($(this).attr(opts.tipsattr)).css("color", opts.color1);  
        }  
         $(this).focus(function() {  
             $(this).css("color", opts.color2);  
             var thisVal = $(this).val() == $(this).attr(opts.tipsattr) ? "" : $(this).val();  
             $(this).val(thisVal);  
         });  
         $(this).blur(function() {  
             if ($(this).val() == "") {  
                 $(this).val($(this).attr(opts.tipsattr)).css("color", opts.color1);  
             }  
         });  
     });  
 }  
})(jQuery);  