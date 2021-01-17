$('document').ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if($(this).children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $(this).children('span').removeClass('fa-pause').addClass('fa-play');
        } else if($(this).children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $(this).children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });
    $('#loginModalButton').click(function(e) {
        e.preventDefault();
        $('#loginModal').modal('show');
    });
    $('#reserveModalButton').click(function(e) {
        e.preventDefault();
        $('#reserveModal').modal('show');
    });
});
