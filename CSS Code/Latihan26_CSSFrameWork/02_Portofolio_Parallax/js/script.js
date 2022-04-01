// event pada saat link di klik
$('.page-scroll').on('click', function (e) {
    // ambil is href
    var tujuan = $(this).attr('href')
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // console.log(elemenTujuan);
    // Body punya fungsi atau obj yg namanya scrollTop
    // console.log($('body').scrollTop());

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
});

// parallax
// about
$(window).on('load', function(){
    $('.pKiri, .pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            //  Set Timeout: menunggu sesuai waktu untuk menjalankan perintah
            setTimeout(function () {
                // eq: equal to -> thumbnail ke berapa?
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });

    }
});