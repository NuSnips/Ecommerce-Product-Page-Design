(() => {
    $(document).ready(function () {
        const $slides = $('.product-img__main-slides li');
        const $arrowNav = $('.product-img__main-nav');
        const $slideThumbs = $('.product-img__main-thumbs li');
        let $slideIdx = 1;

        showSlides($slideIdx);
        $arrowNav.on("click", "span", function (e) {
            let n = $(this).data('value');
            changeSlide(n)
        });

        $slideThumbs.on("click", "a", function (e) {
            e.preventDefault();
            let n = $(this).data("index");
            showSlides($slideIdx = n);
        });

        function changeSlide(val) {
            showSlides($slideIdx += val)
        }

        function showSlides(val) {
            if (val > $slides.length) {
                $slideIdx = 1
            }
            if (val < 1) {
                $slideIdx = $slides.length;
            }
            $slides.removeClass('active');
            $slides.eq($slideIdx - 1).addClass('active');
            $slideThumbs.removeClass('selected');
            $slideThumbs.eq($slideIdx - 1).first('a').addClass('selected');
        }
    });
})();