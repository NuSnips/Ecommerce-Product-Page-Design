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
            let $idx = $lbSlideIdx+val;
            if($idx <= $lbSlides.length && $idx > 0)
                showLbSlides($lbSlideIdx+=val)
        }

        function showLbSlides(val){
            if(!(val > $lbSlides.length) && !(val < 1)){
                $lbSlides.removeClass('active');
                $lbSlides.eq($lbSlideIdx-1).addClass('active');
                $lbSlideThumbs.removeClass('selected');
                $lbSlideThumbs.eq($lbSlideIdx-1).first('a').addClass('selected');
            }
        }
    });
})();