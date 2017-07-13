/**
 * Created by lzx on 2017/5/16.
 */
/*改变nav位置*/
(function(){

    $("#nav .container ul li").eq(0).on("click",function(){
        $('html,body').animate({scrollTop:0});

    });
    $("#nav .container ul li").eq(1).on("click",function(){
        $('html,body').animate({scrollTop:$(".page01 .page01-bottom .container .title").offset().top});
    });
    $("#nav .container ul li").eq(2).on("click",function(){
        $('html,body').animate({scrollTop:$(".page02").offset().top});
    });
    $("#nav .container ul li").eq(3).on("click",function(){
        $('html,body').animate({scrollTop:$(".page03").offset().top});
    });
    $("#nav .container ul li").eq(4).on("click",function(){
        $('html,body').animate({scrollTop:$(".page04").offset().top});
    });
    $("#nav .container ul li").eq(5).on("click",function(){
        $('html,body').animate({scrollTop:$(".page05").offset().top});
    });
    $("#nav .container ul li").eq(6).on("click",function(){
        $('html,body').animate({scrollTop:$(".page06").offset().top});
    });
    $("#nav .container ul li").eq(7).on("click",function(){
        $('html,body').animate({scrollTop:$(".page07").offset().top});
    });
    $("#nav .container ul li").eq(8).on("click",function(){
        $('html,body').animate({scrollTop:$(".page08").offset().top});
    });
    $("#nav .container ul li").eq(9).on("click",function(){
        $('html,body').animate({scrollTop:$(".page09").offset().top});
    });


}());
/*banner-title*/
/*(function () {
    $("#banner .banner-shade p")
}());*/
/*点击nav事件*/

    var LiBtn=$("#nav .container ul li");
    LiBtn.click(function () {
        $(this).addClass("page01-cur").siblings().removeClass("page01-cur")
    })

/*


 $(document).ready(function(){
 var slideShow=$(".slideShow"), //获取最外层框架的名称
 ul=slideShow.find("ul"),
 showNumber=slideShow.find(".showNav span"),//获取按钮
 oneWidth=slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
 var timer=null; //定时器返回值，主要用于关闭定时器
 var iNow=0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

 showNumber.on("click",function(){  //为每个按钮绑定一个点击事件
 $(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
 var index=$(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
 ul.animate({
 "left":-oneWidth*iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值index确定
 })
 });

 timer=setInterval(function(){ //打开定时器
 iNow++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
 if(iNow>showNumber.length-1){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
 iNow=0;
 }
 showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
 },2000); //2000为轮播的时间
 })


 上面的注释写的很详细了，主要是为了方便想学习的小伙伴看，但是实际上我写程序不会注释的那么详细，都是很简单的内容啦，看到这里你可能以为jQuery程序就完了，那就大错特错了，因为自动轮播效果是正确的，但是手动点击时就会出错，我特意做了一段Gif
 */