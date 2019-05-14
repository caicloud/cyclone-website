$(function(){
    // 懒加载背景图片
    // $('.come-up-later').each(function(){
    //     var bg_C=$(this).attr('bg-data');
    //     $(this).css({
    //         'background':`url('${bg_C}') no-repeat center center`,
    //         'background-size':'cover',
    //     })
    // })
    // 版权的年限
    var yearNow=(new Date()).getFullYear();
    if(yearNow==2019){
        $('.year-now').text('2019')
    }else{
        $('.year-now').text("2019-"+yearNow+"")
    }
    // 头部菜单变化
    function shouldHidden(kk,normal,diffC){
        if(kk && kk!='one'){
            if(!$(normal).hasClass(diffC)){
                $(normal).addClass(diffC)
            }
        }else if(!kk){
            if($(normal).hasClass(diffC)){
                $(normal).removeClass(diffC)
            }
        }else{
            if(!$(normal).hasClass(diffC)){
                $(normal).addClass(diffC)
                return;
            }
            if($(normal).hasClass(diffC)){
                $(normal).removeClass(diffC)
                return;
            }
        }
    }
    function AllChangeV(){
        var width_=$(window).width();
        if(width_<820){
            shouldHidden(true,'.header-can','header-can-no-show');
            shouldHidden(false,'.choice-of-header-fixed','header-can-no-show');
        }else{
            shouldHidden(false,'.header-can','header-can-no-show');
            shouldHidden(true,'.choice-of-header-fixed','header-can-no-show');
        }
    }
    AllChangeV();
    $(window).resize(function(){
        setTimeout(AllChangeV,600)
    })

    $('.logo-close-can').on('click',function(){
        var trueOrNot=$('.choice-of-header-fixed').hasClass('header-can-no-show');
        if(!trueOrNot){
            shouldHidden('one','.choice-of-header-fixed','choice-of-header-fixed-show');
        }
    })
    $('.choice-of-header').on('click','a',function(){
        shouldHidden(false,'.choice-of-header-fixed','choice-of-header-fixed-show');
    })
})