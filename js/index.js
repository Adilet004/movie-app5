$('.movie').slick({
    arrows: true,
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
        {
            breakpoint:820,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                arrows:false
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false,
            }
        }
    ]
})


$ ('.movie2') .slick ({
    arrows: true,
    slidesToShow: 4,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
        {
            breakpoint:820,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                arrows:false

            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false,
            }
        }

    ]
})