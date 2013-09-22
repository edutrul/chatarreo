<?php
/**
 * @file
 * slide_portada.features.inc
 */

/**
 * Implements hook_views_api().
 */
function slide_portada_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function slide_portada_image_default_styles() {
  $styles = array();

  // Exported image style: slide.
  $styles['slide'] = array(
    'name' => 'slide',
    'effects' => array(
      1 => array(
        'label' => 'Escalar y recortar',
        'help' => 'Escalar y recortar mantendrán la relación de proporciones de la imagen original y se desechará lo que sobre por el lado mayor. Esto es especialmente útil para crear miniaturas perfectamente cuadradas sin deformar la imagen.',
        'effect callback' => 'image_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => '690',
          'height' => '350',
        ),
        'weight' => '1',
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function slide_portada_node_info() {
  $items = array(
    'slideshow' => array(
      'name' => t('Slide Show'),
      'base' => 'node_content',
      'description' => t('Slide show para la portada'),
      'has_title' => '1',
      'title_label' => t('Título'),
      'help' => '',
    ),
  );
  return $items;
}
