jQuery( document ).ready(function() {


    // sticky header
    // ------------------------

    jQuery(window).scroll(function() {	

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            jQuery('#header-section').attr('style', 'background-color: #fff !important;');

        }else{
            jQuery('#header-section').attr('style', 'background-color: rgba(0,0,0,0) !important;');
        }
    });


    // carousel settings
    // ------------------------

    var to;
    var owl = jQuery('#section-ref .owl-carousel');

    owl.on('initialized.owl.carousel', function(event){ 
        console.log( 'Owl is loaded!' );
        to = setTimeout( function() {
            console.log( 'Initializing Owl with custom parameters!' );
            reinitCarousel();
        }, 800);
    });

    window.onresize = function() { reinitCarousel() };


    function reinitCarousel() {

        owl.trigger('destroy.owl.carousel');
        owl.owlCarousel({
            loop:true,
            items:2,
            dots:false,
            nav:false,
            autoplay:true,
            autoplayTimeout:0,
            autoplaySpeed:3000,
            lazyLoad : true,
            touchDrag  : false,
            mouseDrag  : false,
            onTranslated:next,
            responsive : {
                768 : {
                    items : 4
                },
                1200 : {
                    items : 5
                }
            }
        });

        function next(){
            owl.trigger('next.owl.carousel', 3000);
        }
        clearTimeout(to);
    }

    // first word special class in offer section
    // ------------------------

    jQuery('#section-offre h3 > span').each(function(){
        var me = jQuery(this);
        me.html( me.text().replace(/(^\w+)/,'<strong>$1</strong>') );
    });

});



