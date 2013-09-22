<?php
/**
 * @file
 * feature_taxonomia_plataforma.features.inc
 */

/**
 * Implements hook_node_info().
 */
function feature_taxonomia_plataforma_node_info() {
  $items = array(
    'portafolio' => array(
      'name' => t('Portafolio'),
      'base' => 'node_content',
      'description' => t('Portafolio de trabajos de clientes'),
      'has_title' => '1',
      'title_label' => t('Nombre'),
      'help' => '',
    ),
  );
  return $items;
}
