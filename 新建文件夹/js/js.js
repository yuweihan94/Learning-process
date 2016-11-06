/**
 * Created by Administrator on 2016/11/3 0003.
 */
$(function(){
    $('#search').on('focus',function(){
        if(this.value == this.defaultValue){
            this.value = '';
        }
    });
    $('#search').on('blur',function(){
        if(this.value == ''){
            this.value = this.defaultValue;
        }
    });
    //搜索框实现
    $('#skin1').on('click',function(){
        $('#navwarp').removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin5').addClass('skin1');
        $(this).addClass('skin1').siblings().removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin5');
        $('.list-title').removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin5').addClass('skin1');
    });
    $('#skin2').on('click',function(){
        $('#navwarp').removeClass('skin1').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin5').addClass('skin2');
        $(this).addClass('skin2').siblings().removeClass('skin1').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin5');
        $('.list-title').removeClass('skin1').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin5').addClass('skin2');
    });
    $('#skin3').on('click',function(){
        $('#navwarp').removeClass('skin2').removeClass('skin4').removeClass('skin1').removeClass('skin6').removeClass('skin5').addClass('skin3');
        $(this).addClass('skin3').siblings().removeClass('skin2').removeClass('skin4').removeClass('skin1').removeClass('skin6').removeClass('skin5');
        $('.list-title').removeClass('skin2').removeClass('skin4').removeClass('skin1').removeClass('skin6').removeClass('skin5').addClass('skin3');
    });
    $('#skin4').on('click',function(){
        $('#navwarp').removeClass('skin2').removeClass('skin1').removeClass('skin3').removeClass('skin6').removeClass('skin5').addClass('skin4');
        $(this).addClass('skin4').siblings().removeClass('skin2').removeClass('skin1').removeClass('skin3').removeClass('skin6').removeClass('skin5');
        $('.list-title').removeClass('skin2').removeClass('skin1').removeClass('skin3').removeClass('skin6').removeClass('skin5').addClass('skin4');
    });
    $('#skin5').on('click',function(){
        $('#navwarp').removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin1').addClass('skin5');
        $(this).addClass('skin5').siblings().removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin1');
        $('.list-title').removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin6').removeClass('skin1').addClass('skin5');
    });
    $('#skin6').on('click',function(){
        $('#navwarp').removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin1').removeClass('skin5').addClass('skin6');
        $(this).addClass('skin6').siblings().removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin1').removeClass('skin5');
        $('.list-title').removeClass('skin2').removeClass('skin4').removeClass('skin3').removeClass('skin1').removeClass('skin5').addClass('skin6');
    });
    //换肤功能实现
    $('#centerpic li').on('mouseenter',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#pic img:eq('+$(this).index()+')').show().siblings().hide();
        clearInterval(time)
    }).on('mouseleave',function(){
       timer();
    });
    var time;
    iNow = 0;
    function timer(){
        time=setInterval(function(){
            if(iNow ==4){
                iNow = -1;
            }
            var index = iNow++;
            $('#centerpic li').eq(index).addClass('selected').siblings().removeClass('selected');
            $('#centerpic img').eq(index).addClass('selected1').siblings().removeClass('selected1');

        },2020)
    }
   timer();
//以上为轮播图
    $('#shoes li').on('click',function(){
        $(this).addClass('selected2').siblings().removeClass('selected2');
        $('#shoebar').animate({
            left: - 792 *$(this).index()
        })
    })
});
//以上为商品华动图