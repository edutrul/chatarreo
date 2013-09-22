jQuery(document).ready(function() {
  jQuery('#block-views-listado-servicios-block-2 .views-row').click(function() {	
           jQuery('#sticky-wrapper .views-row').removeClass('encendido');
           jQuery(this).addClass('encendido');
  });
}); 

jQuery(document).scroll(function(){
  var menu_dinamico = jQuery('#block-views-listado-servicios-block-2 .views-row');
 
  planeamiento = jQuery('#block-views-listado-servicios-block-2 .views-row-1'),
  diseno = jQuery('#block-views-listado-servicios-block-2 .views-row-2'),
  desarrollo = jQuery('#block-views-listado-servicios-block-2 .views-row-3'),
  contenido = jQuery('#block-views-listado-servicios-block-2 .views-row-4');
  
  body_region = jQuery('body').offset().top - jQuery(document).scrollTop();
  planeamiento_region = jQuery('#block-views-listado-servicios-block-1 .views-row-1').offset().top - jQuery(document).scrollTop();
  diseno_region = jQuery('#block-views-listado-servicios-block-1 .views-row-2').offset().top - jQuery(document).scrollTop();
  desarrollo_region = jQuery('#block-views-listado-servicios-block-1 .views-row-3').offset().top - jQuery(document).scrollTop();
  contenido_region = jQuery('#block-views-listado-servicios-block-1 .views-row-4').offset().top - jQuery(document).scrollTop();
  
if (body_region == 0){
body.removeClass('encendido');
}
if (planeamiento_region < 200 ){
menu_dinamico.removeClass('encendido');
planeamiento.addClass('encendido');
}
if (diseno_region < 200 ){
menu_dinamico.removeClass('encendido');
diseno.addClass('encendido');
}
if (desarrollo_region < 200 ){
menu_dinamico.removeClass('encendido');
desarrollo.addClass('encendido');
}
if (contenido_region < 200 ){
menu_dinamico.removeClass('encendido');
contenido.addClass('encendido');
}
}); ;
// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
			  .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          stickyId = stickyElement.attr('id');
          wrapper = $('<div></div>')
            .attr('id', stickyId + 'sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
;
jQuery(document).ready(function() {
 jQuery('#block-views-listado-servicios-block-2').css('z-index', '100');
  
	servicios_names = jQuery('#block-views-listado-servicios-block-2 .views-row');
	servicios_views = jQuery('#block-views-listado-servicios-block-1 .views-row');
	  
	servicios_views.each(function() {
		jQuery(this).attr('id', 'servicio-' + jQuery(this).index());
	});
 
    velocidad = 1000;   
    servicios_names.not(':eq(0)').click(function() {  
	console.log(jQuery('#servicio-' + jQuery(this).index()).offset().top)
	  jQuery('html, body').stop().animate({
			scrollTop: jQuery('#servicio-' + jQuery(this).index()).offset().top
		}, velocidad);	  
	});
	
    servicios_names.eq('0').click(function() {	 
	        jQuery('html, body').stop().animate({			       
		           	scrollTop: jQuery('#block-views-listado-servicios-block-2').offset().top 
		   }, velocidad);	     
	 });
	
});

	// STICKY NO BORRAR.
    jQuery(window).load(function(){
      jQuery("#block-views-listado-servicios-block-2 .view-listado-servicios").sticky({ topSpacing: 85});
    });

	

;
