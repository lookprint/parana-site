// CUSTOM KEYSOFT SCRIPTS

    // CHECK IF ELEMENT IS IN VIEW

    (function($) {
      $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
      };
      $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
      };
      $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
      };
      $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
      };
      $.inviewport = function(element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
      };
      $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
          return $.belowthefold(a, {
            threshold: 0
          });
        },
        "above-the-top": function(a, i, m) {
          return $.abovethetop(a, {
            threshold: 0
          });
        },
        "left-of-screen": function(a, i, m) {
          return $.leftofscreen(a, {
            threshold: 0
          });
        },
        "right-of-screen": function(a, i, m) {
          return $.rightofscreen(a, {
            threshold: 0
          });
        },
        "in-viewport": function(a, i, m) {
          return $.inviewport(a, {
            threshold: 0
          });
        }
      });
    })(jQuery);


    $(document).ready(function() {

     
    $('.counter').counterUp({
           delay: 10,
           time: 1200
      });
      // PRELOADER      

      $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
          $(this).remove();
        });
      });

      // FEATURES SECTION TABS

      $('#features-tabs').easytabs({
        animationSpeed: 'normal',
        updateHash: false
      });

      // PIE CHARTS

      $(window).bind("scroll", function(event) {
        $('.chart:in-viewport').easyPieChart({
          animate: 2000,
          barColor: '#1080f2',
          lineWidth: 3,
          easing: 'easeOutBounce',
          lineCap: 'square',
          size: 230,
          trackColor: false,
          scaleColor: false,
          animate: {
            duration: 1500,
            enabled: true
          }
        });
      });





      // CLIENTS SLIDER

      $("#apoio .slider").owlCarousel({
        navigation: true,
        pagination: false,
        autoPlay: 5000, //Set AutoPlay to 3 seconds 
        items: 3,
        
      });

      // MAIN MENU TOGGLE AND SMOOTH SCROLL


      $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
      });

      $(function() {
        $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });
      });

      $('body').scrollspy({
        offset: 64,
        target: '.navbar-fixed-top'
      })

    });

    // CLASSIE SCRIPT

    (function(window) {

      'use strict';

      function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
      }


      var hasClass, addClass, removeClass;

      if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
          return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
          elem.classList.add(c);
        };
        removeClass = function(elem, c) {
          elem.classList.remove(c);
        };
      } else {
        hasClass = function(elem, c) {
          return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
          if (!hasClass(elem, c)) {
            elem.className = elem.className + ' ' + c;
          }
        };
        removeClass = function(elem, c) {
          elem.className = elem.className.replace(classReg(c), ' ');
        };
      }

      function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
      }

      var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
      };

      // transport
      if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
      } else {
        // browser global
        window.classie = classie;
      }

    })(window);


    // ANIMATED MENU

    var cbpAnimatedHeader = (function() {

      var docElem = document.documentElement,
        header = document.querySelector('.navbar-default'),
        didScroll = false,
        changeHeaderOn =50;

      function init() {
        window.addEventListener('scroll', function(event) {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 100);
          }
        }, false);
        window.addEventListener('load', function(event) {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 100);
          }
        }, false);
      }

      function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
          classie.add(header, 'navbar-shrink');
          $(".logo").addClass('importantLogo');
         
        } else {
          classie.remove(header, 'navbar-shrink');
          $(".logo").removeClass('importantLogo');
          $('.quebra-lateral').show();
        }
        didScroll = false;
      }

      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }

      init();

    })();

