// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // ambil is href
    var tujuan = $(this).attr('href')
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // Body punya fungsi atau obj yg namanya scrollTop
    // console.log($('body').scrollTop());

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
});