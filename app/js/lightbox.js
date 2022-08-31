(()=>{
    $(document).ready(function(){
        const $lbSlides = $('.lightbox__content-main ul li');
        const $lbArrowNav = $('.lightbox__content-nav');
        const $lbSlideThumbs = $('.lightbox__content-thumbs li');
        let $lbSlideIdx = 1;

        showLbSlides($lbSlideIdx);

        $lbArrowNav.on("click", "span", function (e){
            e.preventDefault();
            e.stopPropagation();
            let n = $(this).data('value');
            changeLbSlide(n)
        });

        $lbSlideThumbs.on("click", "a", function (e){
            e.preventDefault();
            e.stopPropagation();

            let n = $(this).data("index");
            showLbSlides($lbSlideIdx=n);
        });

        function changeLbSlide(val){
                showLbSlides($lbSlideIdx+=val)
        }

        function showLbSlides(val){
            if (val > $lbSlides.length) {
                $lbSlideIdx = 1
            }
            if (val < 1) {
                $lbSlideIdx = $lbSlides.length;
            }
                $lbSlides.removeClass('active');
                $lbSlides.eq($lbSlideIdx-1).addClass('active');
                $lbSlideThumbs.removeClass('selected');
                $lbSlideThumbs.eq($lbSlideIdx-1).first('a').addClass('selected');
        }
    });
})();