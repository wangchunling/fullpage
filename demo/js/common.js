var params = {
        IsCovered: '1',
        daub_url: 'images/index_blur.jpg'
    }
    //传递给雾层的参数


window.onload = function() {


    $('.loading').remove();

    // // 测试loading
    // setTimeout(function() {
    //     $('.loading').remove();
    // }, 2000);
}
$(document).ready(function() {





    $('#daubCanvas').show();

    if (parseInt(params.IsCovered)) {
        $('#daubCanvas').daub({
            daub_url: params.daub_url,
            onInit: function() {
                $('body').css('background', 'url(images/index.jpg) no-repeat center center').css('background-size', '100% 100%');
            },
            onDaubFinish: function() {
                setInterval(function() {
                    if ($('#section8').hasClass('active')) {
                        $('.swipe_tip').hide();
                    } else {
                        $('.swipe_tip').show();
                    }
                }, 100)
                $('#fullpage,#menu,.swipe_tip').show();
                $('body').css('background-image', 'none');
                $('#fullpage').fullpage({
                    verticalCentered: false,
                    menu: '#menu',
                    anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
                    //easing: 'easeOutBack',
                    //loopBottom: true,
                    // loopTop: true,
                    // navigation: true,
                    // navigationPosition: 'right',
                    slidesNavigation: true,
                    slidesNavPosition: 'bottom',
                    onLeave: function(index, nextIndex, direction) {
                        if (nextIndex == 9) {
                            var slideInterval;
                            slideInterval = setInterval(function() {
                                $.fn.fullpage.moveSlideRight();
                            }, 5000);
                        }
                    }
                });
                $('#bgm').attr({
                    'src': 'music.mp3',
                });
                $('#bgm')[0].play();
            }
        });

    }


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


    $('#go_sign').click(function() {
        var has_reg = parseInt($('#has_reg').val());
        var has_pass = parseInt($('#has_pass').val());
        var user_name_data = $('#user_name_data').val();


        $('.sign_wrap').fadeIn();
        $('.sign,.ewm,.no_pass').hide()

        if (has_reg == 0) {
            $('.sign').show();
        } else if (has_reg == 1 && has_pass == 0) {
            $('.no_pass').show();
        } else if (has_reg == 1 && has_pass == 1) {
            $('.user_name').text(user_name_data);
            $('.ewm').show();
        }
        $('#submit_btn').click(function() {
            $('.sign').hide();
            $('.no_pass').show();
            $('#has_reg').val(1);
        })
    });
    $('.sign_wrap .close').click(function() {
        $('.sign_wrap').fadeOut();
    })
    // $('#go_intro').click(function() {
    //     window.location.href = 'index2.html';
    // })
    $('#submit_btn').click(function() {
        $('.sign').hide();
        $('.sign_tip').fadeIn();
    })

})

//下面是测试代码


// $('#fullpage,#menu,.swipe_tip').show();
// $('body').css('background-image', 'none');
// $('#fullpage').fullpage({
//     verticalCentered: false,
//     menu: '#menu',
//     anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
//     // easing: 'easeOutBack',
//     loopBottom: true,
//     loopTop: true,
//     // navigation: true,
//     // navigationPosition: 'right',
//     slidesNavigation: true,
//     slidesNavPosition: 'bottom',
// });

// $('#bgm').attr({
//     'src': 'music.mp3',
// });
// $('.music_control').click(function() {
//     if ($(this).hasClass('close')) {
//         $('#bgm')[0].play();
//         $(this).addClass('play').removeClass('close');
//         $(this).find('p').text('开启').addClass('fadeIn');
//     } else if ($(this).hasClass('play')) {
//         $('#bgm')[0].pause();
//         $(this).removeClass('play').addClass('close');
//         $(this).find('p').text('关闭').addClass('fadeIn');
//     }
//     setTimeout(function() {
//         $('.music_control').find('p').removeClass('fadeIn');
//     }, 1000)
// })




// $('#go_sign').click(function() {
//     var has_reg = parseInt($('#has_reg').val());
//     var has_pass = parseInt($('#has_pass').val());
//     var user_name_data = $('#user_name_data').val();


//     $('.sign_wrap').fadeIn();

//     if (has_reg == 0) {
//         $('.sign').show();
//     } else if (has_reg == 1 && has_pass == 0) {
//         $('.no_pass').show();
//     } else if (has_reg == 1 && has_pass == 1) {
//         $('.user_name').text(user_name_data);
//         $('.ewm').show();
//     }
//     $('#submit_btn').click(function() {
//         $('.sign').hide();
//         $('.no_pass').show();
//     })
// });
// $('.sign_wrap .close').click(function() {
//     $('.sign_wrap').fadeOut();
// })
// $('#go_intro').click(function() {
//     window.location.href = 'index2.html';
// })
// $('#submit_btn').click(function() {
//     $('.sign').hide();
//     $('.sign_tip').fadeIn();
// })

// setInterval(function() {
//     if ($('#section8').hasClass('active')) {
//         $('.swipe_tip').hide();
//     } else {
//         $('.swipe_tip').show();
//     }
// }, 100)
