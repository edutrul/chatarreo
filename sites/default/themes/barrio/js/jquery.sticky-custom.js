jQuery(document).ready(function() {
  jQuery('#block-views-listado_servicios-block_2 .views-row').click(function() {	
           jQuery('#sticky-wrapper .views-row').removeClass('encendido');
           jQuery(this).addClass('encendido');
  });
}); 

jQuery(document).scroll(function(){
  var menu_dinamico = jQuery('#block-views-listado_servicios-block_2 .views-row');
 
  planeamiento = jQuery('#block-views-listado_servicios-block_2 .views-row-1'),
  diseno = jQuery('#block-views-listado_servicios-block_2 .views-row-2'),
  desarrollo = jQuery('#block-views-listado_servicios-block_2 .views-row-3'),
  contenido = jQuery('#block-views-listado_servicios-block_2 .views-row-4');
  
  body_region = jQuery('body').offset().top - jQuery(document).scrollTop();
  planeamiento_region = jQuery('#block-views-listado_servicios-block_1 .views-row-1').offset().top - jQuery(document).scrollTop();
  diseno_region = jQuery('#block-views-listado_servicios-block_1 .views-row-2').offset().top - jQuery(document).scrollTop();
  desarrollo_region = jQuery('#block-views-listado_servicios-block_1 .views-row-3').offset().top - jQuery(document).scrollTop();
  contenido_region = jQuery('#block-views-listado_servicios-block_1 .views-row-4').offset().top - jQuery(document).scrollTop();
  
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
}); 