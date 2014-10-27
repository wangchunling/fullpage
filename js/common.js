window.onload = function() {
    $('.loading').remove();
}

$(document).ready(function() {
    $('#fullpage').show().fullpage({
        verticalCentered: false,
        // menu: '#menu',
        // anchors:['s1', 's2','s3', 's4','s5', 's6','s7', 's8','s9', 's10','s11', 's12','s13', 's14'],
        // easing: 'easeOutBack',
        loopBottom: true,
        loopTop: true,
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });
    $('#bgm')[0].play();

    $('.music_control').click(function() {
        if ($(this).hasClass('close')) {
            $('#bgm')[0].play();
            $(this).addClass('play').removeClass('close');
            $(this).find('p').text('开启').addClass('fadeIn');
        } else if ($(this).hasClass('play')) {
            $('#bgm')[0].pause();
            $(this).removeClass('play').addClass('close');
            $(this).find('p').text('关闭').addClass('fadeIn');
        }
        setTimeout(function() {
            $('.music_control').find('p').removeClass('fadeIn');
        }, 1000)
    })
})
