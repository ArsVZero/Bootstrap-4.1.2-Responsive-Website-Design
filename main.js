$(document).ready(function () {

    // Border Animation for Navbar
    $('.navbar-nav li a').addClass('border-animation');

    // Homepage Button Animation
    $('.btn-sub1').hover(function () {
        // over
        $('.fa-angle-right').css({
            'transform': 'rotate(180deg)',
            'margin-left': '5px'
        });
    }, function () {
        // out
        $('.fa-angle-right').css({
            'transform': 'rotate(0deg)',
            'margin-left': '0px'
        });
    });

    $('.btn-sub2').hover(function () {
        // over
        $('.fa-angle-double-right').css({
            'transform': 'rotate(180deg)',
            'margin-left': '5px'
        });
    }, function () {
        // out
        $('.fa-angle-double-right').css({
            'transform': 'rotate(0deg)',
            'margin-left': '0px'
        });
    });

    // Feature Animation
    $('.content-1 .col-md-4 .circle').hover(function () {
        // over
        $(this).css({
            'width': '105px',
            'height': '105px',
            'color': '#3f494c'
        });
    }, function () {
        // out
        $(this).css({
            'width': '100px',
            'height': '100px',
            'color': '#ef233c'
        });
    });

    // Progressbar Animation
    const x = 850;
    const y = 650;
    $(window).on('scroll', function () {
        var scrlh = $(document).height();
        var scrlt = $(document).scrollTop();
        if (x < scrlt) {
            $('.pro-1').css('width', '90%');
            $('.pro-2').css('width', '95%');
            $('.pro-3').css('width', '85%');
        } else if (y > scrlt) {
            $('.pro-1, .pro-2, .pro-3').css('width', '0%');
        }
    });
});
$(document).ready(function () {

    // Border Animation for Navbar
    $('.navbar-nav li a').addClass('border-animation');

    // Homepage Button Animation
    $('.btn-sub1').hover(function () {
        // over
        $('.fa-angle-right').css({
            'transform': 'rotate(180deg)',
            'margin-left': '5px'
        });
    }, function () {
        // out
        $('.fa-angle-right').css({
            'transform': 'rotate(0deg)',
            'margin-left': '0px'
        });
    });
    $('.btn-sub2').hover(function () {
        // over
        $('.fa-angle-double-right').css({
            'transform': 'rotate(180deg)',
            'margin-left': '5px'
        });
    }, function () {
        // out
        $('.fa-angle-double-right').css({
            'transform': 'rotate(0deg)',
            'margin-left': '0px'
        });
    });

    // Feature Animation
    $('.content-1 .col-md-4 .circle').hover(function () {
        // over
        $(this).css({
            'width': '105px',
            'height': '105px',
            'color': '#3f494c'
        });
    }, function () {
        // out
        $(this).css({
            'width': '100px',
            'height': '100px',
            'color': '#ef233c'
        });
    });

    // Progressbar Animation
    const x = 850;
    const y = 650;
    $(window).on('scroll', function () {
        var scrlh = $(document).height();
        var scrlt = $(document).scrollTop();
        if (x < scrlt) {
            $('.pro-1').css('width', '90%');
            $('.pro-2').css('width', '95%');
            $('.pro-3').css('width', '85%');
        } else if (y > scrlt) {
            $('.pro-1, .pro-2, .pro-3').css('width', '0%');
        }
    });

    // Pricing Animation
    $('.basic a').hover(function () {
        // over
        $('.basic .basic-border:nth-child(1)').css('width', '92%');
        $('.basic .basic-border:nth-child(2)').css('height', '100%');
        $('.basic .basic-border:nth-child(3)').css('height', '100%');
        $('.basic .basic-border:nth-child(4)').css('width', '92%');
        $('.basic hr').css({
            'background-color': '#e30022',
            'transition': 'all 500ms ease'
        });
    }, function () {
        // out
        $('.basic .basic-border:nth-child(1)').css('width', '1px');
        $('.basic .basic-border:nth-child(2)').css('height', '1px');
        $('.basic .basic-border:nth-child(3)').css('height', '1px');
        $('.basic .basic-border:nth-child(4)').css('width', '1px');
        $('.basic hr').css({
            'background-color': 'inherit',
            'transition': 'all 500ms ease'
        });
    });
    $('.enterprise a').hover(function () {
        // over
        $('.enterprise .enterprise-border:nth-child(1)').css('width', '92%');
        $('.enterprise .enterprise-border:nth-child(2)').css('height', '100%');
        $('.enterprise .enterprise-border:nth-child(3)').css('height', '100%');
        $('.enterprise .enterprise-border:nth-child(4)').css('width', '92%');
        $('.enterprise hr').css({
            'background-color': '#e30022',
            'transition': 'all 500ms ease'
        });
    }, function () {
        // out
        $('.enterprise .enterprise-border:nth-child(1)').css('width', '1px');
        $('.enterprise .enterprise-border:nth-child(2)').css('height', '1px');
        $('.enterprise .enterprise-border:nth-child(3)').css('height', '1px');
        $('.enterprise .enterprise-border:nth-child(4)').css('width', '1px');
        $('.enterprise hr').css({
            'background-color': 'inherit',
            'transition': 'all 500ms ease'
        });
    });
    $('.professional a').hover(function () {
        // over
        $('.professional .pro-span:nth-child(1)').css({
            'height': '100%',
            'bottom': '0%'
        });
        $('.professional .pro-span:nth-child(2)').css({
            'height': '100%',
            'bottom': '0%'
        });
        $('.professional hr').css({
            'background-color': '#e30022',
            'transition': 'all 500ms ease'
        });
    }, function () {
        // out
        $('.professional .pro-span:nth-child(1)').css({
            'height': '145px',
            'bottom': '35%'
        });
        $('.professional .pro-span:nth-child(2)').css({
            'height': '145px',
            'bottom': '35%'
        });
        $('.professional hr').css({
            'background-color': 'inherit',
            'transition': 'all 500ms ease'
        });
    });

    // Services Animation
    $('.content-4 .nav-tabs:nth-child(1)').css({
        'background-color': '#ffffff',
        'border-top': '2.5px solid #e30022'
    });
    $('.content-4 .nav-tabs:nth-child(1)').on('focusin', function () {
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '2.5px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(1)').on('focusout', function () {
        $(this).css({
            'background-color': '#edf2f4',
            'border-top': '0px'
        });
    });
    $('.content-4 .nav-tabs:nth-child(2)').on('focusin', function () {
        $('.content-4 .nav-tabs:nth-child(1)').css({
            'background-color': '#edf2f4',
            'border-top': '0px'
        });
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '2.5px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(2)').on('focusout', function () {
        $(this).css({
            'background-color': '#edf2f4',
            'border-top': '0px'
        });
    });
    $('.content-4 .nav-tabs:nth-child(3)').on('focusin', function () {
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '2.5px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(3)').on('focusout', function () {
        $(this).css({
            'background-color': '#edf2f4',
            'border-top': '0px'
        });
    });
    $('.content-4 .nav-tabs:nth-child(4)').on('focusin', function () {
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '2.5px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(4)').on('focusout', function () {
        $(this).css({
            'background-color': '#edf2f4',
            'border-top': '0px'
        });
    });

    // Form Validation
    function validateEmail($email) {
        var emailrgx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return emailrgx.test($email);
    }
    $('#email').on('focusout', function () {
        if ($(this).val() != '') {
            if (validateEmail($(this).val())) {
                $(this).css('border', '2px solid green');
                $('#error').text('');
            } else {
                $(this).css('border', '2px solid red');
                $('#error').text('Invalid Email');
            }
        } else {
            $(this).css('border', '2px solid red');
            $('#error').text('Email Required');
        }
    });
    $('#comment').on('focusout', function () {
        if ($(this).val() != '') {
            $(this).css('border', '2px solid green');
            $('#error').text('');
        } else {
            $(this).css('border', '2px solid red');
            $('#error').text('Message Required');
        }
    });
    $('#name').on('focusout', function () {
        if ($(this).val() != '') {
            $(this).css('border', '2px solid green');
            $('#error').text('');
        } else {
            $(this).css('border', '2px solid red');
            $('#error').text('Name Required');
        }
    });
    $('#subject').on('focusout', function () {
        if ($(this).val() != '') {
            $(this).css('border', '2px solid green');
            $('#error').text('');
        } else {
            $(this).css('border', '2px solid red');
            $('#error').text('Subject Required');
        }
    });

    // Scroll Up
    $('.top a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // Sticky Navbar
    $(window).scroll(function () { 
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('fixed-top').addClass('sticky');
        }else{
            $('nav').removeClass('fixed-top').removeClass('sticky');
        }
    });

    // Navigation Linking
    $('.nav-item #home').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.nav-item #features').on('click', function () {
        $('html, body').animate({
            scrollTop: 850
        }, 1000);
    });
    $('.nav-item #pricing').on('click', function () {
        $('html, body').animate({
            scrollTop: 1800
        }, 1000);
    });
    $('.nav-item #services').on('click', function () {
        $('html, body').animate({
            scrollTop: 2300
        }, 1000);
    });
    $('.nav-item #aboutus').on('click', function () {
        $('html, body').animate({
            scrollTop: 2900
        }, 1000);
    });
    $('.nav-item #contactus').on('click', function () {
        $('html, body').animate({
            scrollTop: 3900
        }, 1000);
    });
});