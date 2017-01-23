(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').each(function () { // the containers for all your galleries
        // $("#photography-box").magnificPopup({
        //     delegate: 'a',
        //     type: 'image',
        //     tLoading: 'Loading image #%curr%...',
        //     mainClass: 'mfp-img-mobile',
        //     gallery: {
        //         enabled: true,
        //         navigateByImgClick: true,
        //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        //     },
        //     image: {
        //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        //     },
        //     items: [
        //         {
        //             src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
        //             title: 'Peter & Paul fortress in SPB'
        //         },
        //         ]
        //
        // });
        $('#animals').magnificPopup({
            items: [
                {
                    src: 'http://i.imgur.com/ycQi3CZ.jpg',
                    title: 'Caute Rabbit',
                },
                {
                    src: 'http://i.imgur.com/OyMabkh.jpg',
                    title: 'Train rides - Omaha',
                },
                {
                    src: 'http://i.imgur.com/TMpjazz.jpg',
                    title: 'Donkey that ate my hat - Omaha',
                },
                {
                    src: 'http://i.imgur.com/SH3iUh9.jpg',
                    title: 'Caute child feeding Goat Oranges - Omaha',
                },
                {
                    src: 'http://i.imgur.com/Rhkw57B.jpg',
                    title: 'Parrots - Keri Keri',
                },
                {
                    src: 'http://i.imgur.com/neZjJwu.jpg',
                    title: 'National Aquariam - Vancouver',
                },
                {
                    src: 'http://i.imgur.com/H0nSiag.jpg',
                    title: 'Deers - Sheepworld',
                },
                {
                    src: 'http://i.imgur.com/KETYJbd.jpg',
                    title: 'Captive wolf - Vancouver',
                },
            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });

        $('#food').magnificPopup({
            items: [
                {
                    src: 'http://i.imgur.com/b4WLCHj.jpg',
                    title: 'Christmas Log - Omaha',
                },
                {
                    src: 'http://i.imgur.com/Nrs0c5a.jpg',
                    title: 'Rice Kitchen Commercial Shoot',
                },

            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#portraits').magnificPopup({
            items: [
                {
                    src: 'http://i.imgur.com/RJyLWyW.jpg',
                    title: 'Dora - Hawaii',
                },
                {
                    src: 'http://i.imgur.com/Ehp5RHV.jpg',
                    title: 'Me being a buffoon',
                },
                {
                    src: 'http://i.imgur.com/DVoY0cz.jpg',
                    title: 'First portrait - Man Cave',
                },

            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#landscapes').magnificPopup({
            items: [
                {
                    src: 'http://i.imgur.com/liy1BSz.jpg',
                    title: 'Hobbiton Scarecrow - Matamata',
                },
                {
                    src: 'http://i.imgur.com/jbnzC4X.jpg',
                    title: 'Japanese Gardens - San Fran',
                },
                {
                    src: 'http://i.imgur.com/zZEd2n0.jpg',
                    title: 'Japanese Gardens - San Fran',
                },
                {
                    src: 'http://i.imgur.com/UmMz2D1.jpg',
                    title: 'Canoe - Keri Keri',
                },
                {
                    src: 'http://i.imgur.com/E7aWf7k.jpg',
                    title: 'Petals bathtub - Keri Keri',
                },
                {
                    src: 'http://i.imgur.com/G7BR2FW.jpg',
                    title: 'View from highrise apartment - Central Vancouver',
                },
            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#products').magnificPopup({
            items: [
                {
                    src: 'http://i.imgur.com/jxsVeKA.jpg',
                    title: 'Space grey. So hot right now.',
                },
                {
                    src: 'http://i.imgur.com/U5BgfxL.jpg',
                    title: 'Commercial shoot for Computer Lounge',
                },
                {
                    src: 'http://i.imgur.com/FEa5guO.jpg',
                    title: 'EK Waterblock - Commerial Shoot',
                },
                {
                    src: 'http://i.imgur.com/L6Qnkyy.jpg',
                    title: 'Space grey. So hot right now.',
                },
            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#misc').magnificPopup({
            items: [
                {
                    src: 'http://i.imgur.com/2lAqICu.jpg',
                    title: 'Contemporary Art Display - San Francisco',
                },
                {
                    src: 'http://i.imgur.com/IrgUcZL.jpg',
                    title: 'Contemporary Art Display - Seattle',
                },
                {
                    src: 'http://i.imgur.com/RSKE38Z.jpg',
                    title: 'Museum display - San Francisco',
                },
                {
                    src: 'http://i.imgur.com/ADyuaFU.jpg',
                    title: 'Ferrari rims - Auckland',
                },
                {
                    src: 'http://i.imgur.com/QrD3fat.jpg',
                    title: 'BMW drivers track day - South Auckland',
                },


            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });

        $("#videography-box").magnificPopup({
            delegate: 'a',
            type: 'iframe',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The video #%curr%</a> could not be loaded.'
            }
        });
    });
    // $('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });
    //
    // $('.popup-gallery-video').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The video #%curr%</a> could not be loaded.'
    //     }
    // });
    //
    // $(document).ready(function() {
    //     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    //
    //         fixedContentPos: false
    //     });
    // });



})(jQuery); // End of use strict
