$(function(){


//    轮播图部分
//        $('.carousel').carousel({
//            interval: 1500
//        })
    var item= $(".carousel-inner .item");
    $(window).on("resize",function(){
        var width= $(window).width();
        /*判断屏幕的宽度：移动端--非移动端*/
        if(width < 768){
//                var item= $(".carousel-inner .item");
            /*需要为四个item添加指定的html结构*/
            item.each(function(index,value){
                /*获取当前item中存储的smallImage*/
                /*如果dom方式，通过dom.dateSet[''],如果是jq,使用$(dom).data('')*/
                var img = $(this).data("small-image");
                $(this).html('<a href="" class="smallImg hidden-sm hidden-md hidden-lg"> <img src="'+img+'" alt="..."></a>');
            })
        } else{
            item.each(function(index,value){
                // 先获取item中存储的large-image；
                var img =$(this).data("large-image");
                $(this).html('<a class="pcImg hidden-xs" style="background-image:url('+img+')"></a>');
            })
        }
        /*trigger:添加了事件之后默认让事件先触发一次*/
    }).trigger("resize");
    // 添加滑动事件
    var startX = 0, endX=0,distanceX=0;
    var carouselInner =$(".carousel-inner")[0];
    carouselInner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    })
    carouselInner.addEventListener("touchend",function(e){
        // touchend不能使用targetTouches，智能使用changedTouches
        endX = e.changedTouches[0].clientX;
        distanceX= endX - startX;
        if(distanceX > 0){
            $('.carousel').carousel('prev');
        }else if(distanceX <0){
            $(".carousel").carousel('next');
        }
    })

//  产品块头部
    //1.先要获取ul的宽度

    var ul = $(".tab_parent .nav-tabs");
    var lis = $("li");
    //设置总宽度
    var total = 0;
    lis.each(function(index,value){
        /*width():仅仅是得到当前元素内容的宽度
         * innerWidth():得到当前元素内容+padding的宽度
         * outerWidth():得到当前元素内容+padding+border的宽度
         * outerWidth(true):得到当前元素内容+padding+border+margin的宽度*/
        //console.log($(this).innerWidth());
        var  width =  $(this).innerWidth();
        total+=width;
    })
   //2.设置ul的宽度
    ul.width(total);

//    设置滑动
    /*使用插件实现标签页导航的滑动
     * 插件默认只能实现垂直滑动，如果想水平也能滑动，则需要进行下面的属性设置*/
    var myScroll =new IScroll('.tab_parent',{
        scrollX : true,
        scrollY : false
    })

})
