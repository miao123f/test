$(function() {

    function isPause(elem) {
        elem.el.onmouseover = function() {
            elem.autoplay.stop();
        }
        elem.el.onmouseout = function() {
            elem.autoplay.start();
        }
    }

    //轮播图
    var scrollSwiper = new Swiper('.swiper_scroll', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: true,
        })
        //头条
    var headlineSwiper = new Swiper('.swiper-container-headline', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
    })
    isPause(scrollSwiper);
    isPause(headlineSwiper);

})