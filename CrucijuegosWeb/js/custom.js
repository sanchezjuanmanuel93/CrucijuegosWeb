jQuery(document).ready(function () {

    
    jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
    jQuery('body').waitForImages(function() {
        jQuery(".page-mask").delay(1200).fadeOut('slow');
        jQuery('body').css('overflowY','auto');
    });


/*-------------------------------------------------*/
/* =  Animated content
/*-------------------------------------------------*/

    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );

    wow.init();

/*==========================*/
/* Sticky Navigation
/*==========================*/
     
    jQuery("#navigation").sticky({topSpacing:0});

    
/*==========================*/
/* Video Background Overlay
/*==========================*/

    var winheight = jQuery(window).height();

    jQuery(".video-overlay").css( "height", winheight );


/* ==============================================
Drop Down Menu Fade Effect
=============================================== */  

    $('.nav-toggle').hover(function() {
        'use strict';
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
        }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
     });



/*==========================*/
/* Navigation Scrolling
/*==========================*/
    jQuery('.nav').onePageNav({
            filter: ':not(.external)',
            begin: function() {
            console.log("start")
            },
            end: function() {
            console.log("stop")
            }
        });


    var navigationHeight = jQuery("#navigation").outerHeight();

    jQuery('.align-center a, .caption-inside a, .top-logo a, .video-section a').click(function(){
        jQuery('html, body').animate({
            scrollTop: jQuery( $.attr(this, 'href') ).offset().top - navigationHeight + 44
        }, 800, 'easeInQuad');
        
        /* Fix jumping of navigation. */
        setTimeout(function() {
            jQuery(window).trigger('scroll');
        }, 900);
        
        return false;
    });



    

/*==========================*/
/* FullScreen Slider
/*==========================*/

    jQuery(function (){
        jQuery('#fullscreen-slider').maximage({
            cycleOptions: {
                fx: 'fade',
                speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
                timeout: 4000,
                prev: '#slider_left',
                next: '#slider_right',
                pause: 1,
                before: function(last,current){
                    jQuery('.slide-content').fadeOut().animate({top:'500px'},{queue:false, easing: 'easeOutQuad', duration: 750});
                    jQuery('.slide-content').fadeOut().animate({top:'-500px'});
                },
                after: function(last,current){
                    jQuery('.slide-content').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 650});
                }   
                
                
                        
            },
            
            
            
            onFirstImageLoaded: function(){
                //jQuery('#cycle-loader').delay(1000).hide();
                jQuery('#fullscreen-slider').delay(1000).fadeIn('slow');
                jQuery('.slide-content').fadeIn().animate({top:'0'});
                jQuery('.slide-content a').bind('click',function(event){
                    var $anchor = jQuery(this);              
                    jQuery('html, body').stop().animate({
                    scrollTop: jQuery($anchor.attr('href')).offset().top -44
                    }, 1500,'easeInOutExpo');               
                    event.preventDefault();
                    });         
            }
        });

        // Helper function to Fill and Center the HTML5 Video
        jQuery('video,object').maximage('maxcover');
        
        
        
        

        // To show it is dynamic html text
        
    });


    

/*----------------------------------------------------*/
/*  Parallax section
/*----------------------------------------------------*/
    //Calculating page width
    pageWidth = jQuery(window).width();

    //Parallax  
    jQuery(window).bind('load', function () {
        if(pageWidth > 980) {
            parallaxInit();
        }                       
    });

    function parallaxInit() {
        jQuery('.landing-left').parallax("30%", 0.1);
        jQuery('.testimonial-wrap').parallax("30%", 0.1);
        jQuery('.quote-wrap').parallax("30%", 0.1);
        jQuery('.subscription-wrap').parallax("30%", 0.1);
        jQuery('.image-parallax').parallax("50%", 0.1);
        
    }


    //Horizontal parallax
    jQuery('.about-wrap .parallax-layer')
        .hparallax({
          mouseport: jQuery('.about-wrap')
    }); 


/*----------------------------------------------------*/
/*  Animated Progress Bars
/*----------------------------------------------------*/

    jQuery('.skills li').each(function () {
        jQuery(this).fappear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 1300, "easeOutCirc");
        }); 
    });   


/*----------------------------------------------------*/
/*  Animated Count To
/*----------------------------------------------------*/

    jQuery('.fun-wrap .fun-box').each(function () {
        jQuery(this).fappear(function() {
            jQuery('.fun').countTo();
        }); 
    });


 
/*----------------------------------------------------*/
/*  Scroll To Top Section
/*----------------------------------------------------*/
    jQuery(document).ready(function () {
    
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        });
    
        jQuery('#scrollup').click(function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    
    });





/*----------------------------------------------------*/
/*  Accordion Section
/*----------------------------------------------------*/

    jQuery('.accordionMod').each(function (index) {
        var thisBox = jQuery(this).children(),
            thisMainIndex = index + 1;
        jQuery(this).attr('id', 'accordion' + thisMainIndex);
        thisBox.each(function (i) {
            var thisIndex = i + 1,
                thisParentIndex = thisMainIndex,
                thisMain = jQuery(this).parent().attr('id'),
                thisTriggers = jQuery(this).find('.accordion-toggle'),
                thisBoxes = jQuery(this).find('.accordion-inner');
            jQuery(this).addClass('panel');
            thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
            thisTriggers.wrap('<div class=\"panel-heading\" />');
            thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + thisParentIndex + '_' + thisIndex);
        });
        jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
        jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
        jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
        jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
        jQuery('.accordionMod .accordion-toggle').click(function () {
            if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
                jQuery(this).removeClass('current');
                jQuery(this).find('.icon').removeClass('iconActive');
            } else {
                jQuery(this).addClass('current');
                jQuery(this).find('.icon').addClass('iconActive');
            }
            jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
            jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
        });
    });


/*----------------------------------------------------*/
/*  PrettyPhoto
/*----------------------------------------------------*/

    jQuery(function(){
        
        jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto({
              opacity: 0.5,
              social_tools: '',
              deeplinking: false
        });
        
        jQuery("a[rel^='prettyPhoto']").prettyPhoto({social_tools:''});

        jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
    });     



    jQuery("#horizontal-tabs").tytabs({
        tabinit: "1",
        fadespeed: "fast"
    });


/*----------------------------------------------------*/
/*  Jquery Google map Section
/*----------------------------------------------------*/
        
    //Google map
    jQuery('#maps').gMap({
        zoom: 5,
        latitude: -28.314115,
        longitude: -60.407381,        
        icon: {
            image: "img/ico/gmap-ico.png", 
            iconsize: [29, 33],
            iconanchor: [12, 46]
        },
        controls: {
         panControl: true,
         zoomControl: true,
         mapTypeControl: true,
         scaleControl: true,
         streetViewControl: true,
         overviewMapControl: true
     },
        markers: [
            {
            latitude: -32.925767,
            longitude: -60.758944,
            html: "<h4>Rosario</h4><h5>Casa Central</h5><p>Av. Eva Perón 8989</p>",
            popup: false
            },
            {
            latitude: -27.478183, 
            longitude: -58.81534,
            html: "<h4>Resistencia</h4><h5>Hipermercado Carrefour</h5><p>Av. Ferre y Chacabuco</p>",
            popup: false
            },
            {
            latitude: -31.4089719,
            longitude:  -64.1707969,
            html: "<h4>Jacinto Rios</h4><h5>Hipermercado Libertad</h5><p>Libertad 1100</p>",
            popup: false
            },
            {
            latitude: -26.183247,
            longitude: -58.183334,
            html: "<h4>Formosa</h4><h5>Hipermercado Cáceres</h5><p>Av. Juan D. Perón 757</p>",
            popup: false
            },
            {
            latitude: -27.4159722,
            longitude: -58.9621492,
            html: "<h4>Resistencia</h4><h5>El Limite Bar & Bowling</h5><p>Av. Ferre y Chacabuco</p>",
            popup: false
            },
            {
            latitude: -27.3668563,
            longitude: -55.8956427,
            html: "<h4>Posadas</h4><h5>Posadas Plaza Shopping</h5><p>Bolivar 1979 - Local 43</p>",
            popup: false
            },
            {
            latitude: -27.4159722,
            longitude: -58.9621492,
            html: "<h4>Resistencia</h4><h5>Hipermercado Libertad</h5><p>Ruta nº 16 Nicolás Avellaneda y Doctor Savin</p>",
            popup: false
            },
            {
            latitude: -33.0064799,
            longitude: -60.6650291,
            html: "<h4>Rosario</h4><h5>Hipermercado Libertad</h5><p>Bv. Oroño 6000</p>",
            popup: false
            },
            {
            latitude: -24.8314447,
            longitude: -65.4282296,
            html: "<h4>Salta</h4><h5>Hipermercado Libertad</h5><p>Av.Tabella y Ex. Combatientes de Malvinas</p>",
            popup: false
            },
            {
            latitude: -31.523984,
            longitude: -68.54418,
            html: "<h4>San Juan</h4><h5>Hipermercado Libertad</h5><p>Scalabrini Ortiz y Circunvalación</p>",
            popup: false
            },
            {
            latitude: -27.7834047,
            longitude: -64.3400831,
            html: "<h4>Santiago Del Estero</h4><h5>Hipermercado Libertad</h5><p>Aut. Júan D. Perón</p>",
            popup: false
            },
            {
            latitude: -26.8343222,
            longitude: -65.2526479,
            html: "<h4>Tucuman I</h4><h5>Hipermercado Libertad</h5><p>Av. Roca 3450</p>",
            popup: false
            },
            {
            latitude: -26.794883,
            longitude: -65.2074279,
            html: "<h4>Tucuman II</h4><h5>Hipermercado Libertad</h5><p>Suipacha y Castelar. Acceso Norte</p>",
            popup: false
            },
            {
            latitude: -32.4099578,
            longitude: -63.2437617,
            html: "<h4>Villa Maria</h4><h5>Paseo Villa María</h5><p>Ruta 158 km 155</p>",
            popup: false
            },
            {
            latitude: -32.4099578,
            longitude: -63.2437617,
            html: "<h4>Villa Maria</h4><h5>Paseo Villa María</h5><p>Ruta 158 km 155</p>",
            popup: false
            }
        ]
    });




/*===============================================*/
/*  Video Script
/*===============================================*/

    jQuery(function(){
        jQuery(".player").mb_YTPlayer();
    }); 


/*----------------------------------------------------*/
/*  Carousel Section
/*----------------------------------------------------*/

    
    jQuery('.testimonials-carousel').carousel({interval: false, wrap: false});   
    
    jQuery('.testimonials-carousel-widget').carousel({interval: 5000, pause: "hover"});

});




/*----------------------------------------------------*/
/*  Portfolio Isotope
/*----------------------------------------------------*/




    jQuery(document).ready(function(){ 

        // Portfolio
        (function($) {
            "use strict";
            var $container = $('#portfolio-wrap'),
                $items = $container.find('.portfolio-item'),
                portfolioLayout = 'fitRows';
                
                if( $container.hasClass('portfolio-centered') ) {
                    portfolioLayout = 'masonry';
                }
                        
                $container.isotope({
                    filter: '*',
                    animationEngine: 'best-available',
                    layoutMode: portfolioLayout,
                    animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                },
                masonry: {
                }
                }, refreshWaypoints());
                
                function refreshWaypoints() {
                    setTimeout(function() {
                    }, 1000);   
                }
                        
                $('#filters a').on('click', function() {
                        var selector = $(this).attr('data-filter');
                        $container.isotope({ filter: selector }, refreshWaypoints());
                        $('#filters a').removeClass('active');
                        $(this).addClass('active');
                        return false;
                });
                
                function getColumnNumber() { 
                    var winWidth = $(window).width(), 
                    columnNumber = 1;
                
                    if (winWidth > 1200) {
                        columnNumber = 4;
                    } else if (winWidth > 950) {
                        columnNumber = 4;
                    } else if (winWidth > 600) {
                        columnNumber = 3;
                    } else if (winWidth > 400) {
                        columnNumber = 2;
                    } else if (winWidth > 250) {
                        columnNumber = 1;
                    }
                        return columnNumber;
                    }       
                    
                    function setColumns() {
                        var winWidth = $(window).width(), 
                        columnNumber = getColumnNumber(), 
                        itemWidth = Math.floor(winWidth / columnNumber);
                        
                        $container.find('.portfolio-item').each(function() { 
                            $(this).css( { 
                            width : itemWidth + 'px' 
                        });
                    });
                }
                
                function setPortfolio() { 
                    setColumns();
                    $container.isotope('reLayout');
                }
                    
                $container.imagesLoaded(function () { 
                    setPortfolio();
                });
                
                $(window).on('resize', function () { 
                setPortfolio();          
            });
        })(jQuery);
    

    

    });



/*----------------------------------------------------*/
/*  BxSlider
/*----------------------------------------------------*/


jQuery(document).ready(function(){
    
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    
    jQuery('.fullwidth-slider').bxSlider({
        mode: "fade",
        speed: 1000,
        pager: false,
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>', 
        
        onSlideBefore: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
            ($slideElement).find('.slide-caption').hide().animate({top:'-100px'});
        },
        onSlideAfter: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
        },
        
    });
    
    jQuery('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');
    
    
    if( ( onMobile === false ) && ( jQuery('.parallax-slider').length ) ) {
    
        skrollr.init({
            edgeStrategy: 'set',
            smoothScrolling: false,
            forceHeight: false
        });
        
    }


    jQuery('.text-slide').bxSlider({
        controls: false,
        adaptiveHeight: true, 
        pager: false,       
        auto:true,
        mode:'fade',
        pause: 3000,
    });   

    
});  

/*----------------------------------------------------*/
/*  Contact Form Section
/*----------------------------------------------------*/
    /*
    function mostrarMensaje(data){
        if(data.status==200){
            alert("hola");
        }
        else
        {
            alert("chau");
        }
    }
    */

    $("#contact").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var text = $("#text").val();
        var sala = $("#sala2").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&text=' + text + '&sala=' + sala;
        

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        
        function isValidSala(idSala){
            if(idSala!=0){
                return true;
            }else{
                return false;
            }
        }

        if (isValidEmail(email) && isValidSala(sala) ) {
            $.ajax({
                type: "POST",
                url: "ajax/process.php",
                data: dataString,
                success: function (data,status) {
                    $('#contact .success').fadeIn(1000).delay(3000).fadeOut(1000);
                    $('#contact')[0].reset();
                    console.log(status);
                },
                error: function(error){
                    $('#contact select').val(sala);
                    $('#contact .error').html(error);
                    $('#contact .error').fadeIn(1000).delay(5000).fadeOut(1000);
                    console.log(error);
                }
            });
        } else {
            $('.error').fadeIn(1000).delay(5000).fadeOut(1000);
        }

        return false;
    });
    
    $('#curriculum').bind('change', function() {
        var ext = $('#curriculum').val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['doc','docx','pdf','odt']) == -1 || this.files[0].size > 2097152) {
            $('#curriculum').val("");
            $('#error2').append('La extención del archivo debe ser .Doc/.Docx/.PDF/.ODT y su tamaño menor a 2MB ');
            $('#error2').fadeIn(1000).delay(5000).fadeOut(1000);
        }
        
    });
    
    
    var text_max = 300;
    $('#contact .count_message').html(text_max + ' caracteres restantes');
    $('#contact textarea').keyup(function() {
        var text_length = $(this).val().length;
        var text_remaining = text_max - text_length;
        $('#contact .count_message').html(text_remaining + ' caracteres restantes');
    });    
    
    var text_max2 = 500;
        $('#signup .count_message').html(text_max2 + ' caracteres restantes');
        $('#signup textarea').keyup(function() {
            var text_length = $('#signup textarea').val().length;
            var text_remaining = text_max2 - text_length;
            $('#signup .count_message').html(text_remaining + ' caracteres restantes');
        });
    
    $("#signup").submit(function (e) {
        e.preventDefault();
        
        var sala = $("#sala").val();
        var email = $("#subEmail").val();
        var nomYape = $("#nomYape").val();
        var tel = $("#tel").val();
        var mensaje = $("#mensaje").val();
        
        
        var sentData = new FormData();
        var file_data = $('#curriculum').prop('files')[0];
        sentData.append('curriculum', file_data);
        sentData.append('email', email);
        sentData.append('sucursales', sala);
        sentData.append('telefono', tel);
        sentData.append('nombre', nomYape);
        sentData.append('mensaje', mensaje);
        //var file = $("input:file").val();
        //var dataString = 'sala=' + name + '&email=' + email + '&subject=' + subject + '&text=' + text;
        

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        



        if (isValidEmail(email) && sala>0 && sala<15 && $('#curriculum').length > 0) {
            $.ajax({
                type: "POST",
                url: "ajax/mail_sala.php",
                data: sentData,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    $('#success2').empty();
                    $('#success2').append(data.message);
                    $('#success2').fadeIn(1000).delay(3000).fadeOut(1000);
                    $('#signup')[0].reset();                    
                },
                error: function(err) {
                    $('#signup select').val(sala);
                    $('#error2').empty();
                    $('#error2').append(err.message);
                    $('#error2').fadeIn(1000).delay(5000).fadeOut(1000);
                }
            });
        } else {
            $('#signup select').val(sala);
            $('#error2').empty();
            $('#error2').append("Todos los campos deben estar completos");            
            $('#error2').fadeIn(1000).delay(5000).fadeOut(1000);
        }

        return false;
    });
    
   

 /* ==============================================
Firefox anchor fix
=============================================== */
    $(document).ready(function(){
        if ( $.browser.mozilla ) {
        var h = window.location.hash;
        if (h) {
            var headerH = $('#navigation').outerHeight();
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

                event.preventDefault();
        }

    }
    });
