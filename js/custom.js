$(function () {




    // <헤더 : 스크롤 아래로 내리면 메인 메뉴바 안보이게>
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });


    // aos처럼 on이 붙이면 효과나타나는 것
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })

    //const mainSlide = $('.main_slide').slick({});
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        // 💫스와이퍼
        parallax: true,
        speed: 600,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
    });


    // <메인배너 : 화살표 클릭>
    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });


    // 2️⃣ 늘어날경우 감싼 박스에 overflow hiddern 주기
    const noticeSlide = new Swiper('.notice_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });

    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });



    // up
    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });

    // fade
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 저장
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 300) {
            // 스크롤 내린만큼 오면 나타나기
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });






    // 반응형 모바일 메뉴바 버튼 나오게 하기
    $('.mobile_btn').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.header').toggleClass('oo');
        // oo클래스 생각해서 붙이기
    });


    $('.gnb .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            // a눌렀을때 새로고침안되게
            $(this)
                .next()
                .stop()
                .slideToggle();
            // slideToggle(); 누르면 상하 왓다갓다

            //🎈부가기능들
            $(this)
                .parent()
                .siblings()
                .find('.sub_menu')
                .stop()
                .slideUp();
        }
    });

    // 오작동없게하기?
    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    // 힐작동하지않게 이벤트에 전파 막아버림
    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

})