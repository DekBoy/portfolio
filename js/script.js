// even pada saat link di klick
$('.page-scroll').on('click', function(e){
    
    //ambil isi href
    var tujuan = $(this).attr('href');
    
    //tangkap element ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000);
    e.preventDefault();
});
