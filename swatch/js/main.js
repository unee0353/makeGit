$(document).ready(function(){
    // 1. 윈도우 높이값에 섹션높이값 맞추기
    
    function winHeight(){
        var wheight = $(window).height();
        $('section').height(wheight);
    };
    
    winHeight();//전(체영)역(=global)에서 실행
    
    /*$(window).on('resize',function(){
       winHeight(); 
    });*/
    $(window).on('resize',winHeight);

    // 2. #menu li 클릭하면 해당 섹션까지 부드럽게 스크롤이동하기
    $('#menu li').on('click',function(e){
        e.preventDefault;
        var i = $(this).index();
        var oft = $('section').eq(i).offset().top;
        $('html, body').animate({
            'scrollTop' : oft
        });
        /*
            var i = $(this).index();
            $('html, body').animate({
                'scrollTop' : i * winHeight
            });
        */
    });
    /*
        $('#menu li').on('click',function(){
            var winHeight = $(window).height();
            var i = $(this).index();
            $('html, body').animate({
                'scrollTop' : i * winHeight
            });
        });
    */
    
    
    // 3. 화면이 스크롤될때 마다 현재 영역에 해당하는 메뉴 활성화시키기
    $(window).on('scroll',function(){
        var scr = $(window).scrollTop();
        var wheight = $(window).height();
        var i = $(this).index();
        
        for(i = 0; i < 4; i++){
            if(scr>=wheight*i && scr<=wheight*(i+1)){
                $('#menu li').eq(i).addClass('on').siblings().removeClass('on');
            }
        }
        /*
            $(window).on('scroll',function(){
                var src = $(window).scrollTop(); => 스크롤의 위치값
            
            if(0 <= 스크롤의 위치값 && 스크롤의 위치값 < winHeight){
               $('li').eq(0).addClass('on)}
               if(winHeight <= 스크롤의 위치값 && 스크롤의 위치값 < winHeight*2){
                $('li').eq(1).addClass('on)}
                if(winHeight*2 <= 스크롤의 위치값 && 스크롤의 위치값 < winHeight*3){
                $('li').eq(2).addClass('on)}
                if(winHeight*4 <= 스크롤의 위치값 && 스크롤의 위치값 < winHeight*5){
                $('li').eq(3).addClass('on)}
            }
            
            });
        */
    });
    
    
    // 4. 마우스의 움직임에 따라 오브젝트들 움직이기
    $('section').on('mousemove',function(e){
        var x = e.pageX;
        var y = e.pageY;
        $('section .p11').css({
            right:20 + (x/30),
            bottom:20 + (y/30)
        });
        $('section .p12').css({
            right:130 - (x/30),
            bottom:-40 - (y/30)
        });
        $('section .p21').css({
            right:-180 + (x/30),
            bottom:-480 + (y/30)
        });
        $('section .p22').css({
            right:130 - (x/30),
            bottom:-40 - (y/30)
        });
        $('section .p31').css({
            right:180 - (x/30),
            bottom:30 - (y/30)
        });
        $('section .p32').css({
            right:110 + (x/30),
            bottom:-270 + (y/30)
        });
        $('section .p33').css({
            right:-70 + (x/30),
            bottom:-130 + (y/30)
        });
        $('section .p41').css({
            right:20 - (x/30),
            bottom:-120 - (y/30)
        });
        $('section .p42').css({
            right:0 + (x/30),
            bottom:-180 + (y/30)
        });
    });
    
    // 5. 마우스휠의 움직임에 따라 섹션 이동하기
    $('section').on('mousewheel',function(e,d){
        if(d>0){
            var prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                'scrollTop' : prv
            },1400,'easeOutBounce');
        }else if(d<0){
            var nex = $(this).next().offset().top;
            $('html, body').stop().animate({
               'scrollTop' : nex 
            },1400,'easeOutBounce');
        };
    });
    
    
});//opning