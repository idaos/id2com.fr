jQuery( document ).ready(function() {


    // sticky header
    // ------------------------

    jQuery(window).scroll(function() {	

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            jQuery('#header-section').attr('style', 'background-color: #fff !important;');

        }else{
            jQuery('#header-section').attr('style', 'background-color: rgba(0,0,0,0) !important;');
        }



        // carousel settings
        // ------------------------
        isReinit = false;
        reiitCarousel();
        window.onresize = function() { reinitCarousel() };

        if(!isReinit){
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

                function reinitCarousel() {
                    isReinit = true;
                    var owl = jQuery('#section-ref .owl-carousel');
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
                }
            }
        }

    });

    // first word special class in offer section
    // ------------------------

    jQuery('#section-offre h3 > span').each(function(){
        var me = jQuery(this);
        me.html( me.text().replace(/(^\w+)/,'<strong>$1</strong>') );
    });

});



