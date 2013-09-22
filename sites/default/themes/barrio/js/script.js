jQuery(document).ready(function() {
 jQuery('#block-views-listado_servicios-block_2').css('z-index', '100');
  
	servicios_names = jQuery('#block-views-listado_servicios-block_2 .views-row');
	servicios_views = jQuery('#block-views-listado_servicios-block_1 .views-row');
	  
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
		           	scrollTop: jQuery('#block-views-listado_servicios-block_2').offset().top 
		   }, velocidad);	     
	 });
	
});

	// STICKY NO BORRAR.
    jQuery(window).load(function(){
      jQuery("#block-views-listado_servicios-block_2 .view-listado-servicios").sticky({ topSpacing: 85});
    });

	

