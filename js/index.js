$(function(){


//    �ֲ�ͼ����
//        $('.carousel').carousel({
//            interval: 1500
//        })
    var item= $(".carousel-inner .item");
    $(window).on("resize",function(){
        var width= $(window).width();
        /*�ж���Ļ�Ŀ�ȣ��ƶ���--���ƶ���*/
        if(width < 768){
//                var item= $(".carousel-inner .item");
            /*��ҪΪ�ĸ�item���ָ����html�ṹ*/
            item.each(function(index,value){
                /*��ȡ��ǰitem�д洢��smallImage*/
                /*���dom��ʽ��ͨ��dom.dateSet[''],�����jq,ʹ��$(dom).data('')*/
                var img = $(this).data("small-image");
                $(this).html('<a href="" class="smallImg hidden-sm hidden-md hidden-lg"> <img src="'+img+'" alt="..."></a>');
            })
        } else{
            item.each(function(index,value){
                // �Ȼ�ȡitem�д洢��large-image��
                var img =$(this).data("large-image");
                $(this).html('<a class="pcImg hidden-xs" style="background-image:url('+img+')"></a>');
            })
        }
        /*trigger:������¼�֮��Ĭ�����¼��ȴ���һ��*/
    }).trigger("resize");
    // ��ӻ����¼�
    var startX = 0, endX=0,distanceX=0;
    var carouselInner =$(".carousel-inner")[0];
    carouselInner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    })
    carouselInner.addEventListener("touchend",function(e){
        // touchend����ʹ��targetTouches������ʹ��changedTouches
        endX = e.changedTouches[0].clientX;
        distanceX= endX - startX;
        if(distanceX > 0){
            $('.carousel').carousel('prev');
        }else if(distanceX <0){
            $(".carousel").carousel('next');
        }
    })

//  ��Ʒ��ͷ��
    //1.��Ҫ��ȡul�Ŀ��

    var ul = $(".tab_parent .nav-tabs");
    var lis = $("li");
    //�����ܿ��
    var total = 0;
    lis.each(function(index,value){
        /*width():�����ǵõ���ǰԪ�����ݵĿ��
         * innerWidth():�õ���ǰԪ������+padding�Ŀ��
         * outerWidth():�õ���ǰԪ������+padding+border�Ŀ��
         * outerWidth(true):�õ���ǰԪ������+padding+border+margin�Ŀ��*/
        //console.log($(this).innerWidth());
        var  width =  $(this).innerWidth();
        total+=width;
    })
   //2.����ul�Ŀ��
    ul.width(total);

//    ���û���
    /*ʹ�ò��ʵ�ֱ�ǩҳ�����Ļ���
     * ���Ĭ��ֻ��ʵ�ִ�ֱ�����������ˮƽҲ�ܻ���������Ҫ�����������������*/
    var myScroll =new IScroll('.tab_parent',{
        scrollX : true,
        scrollY : false
    })

})
