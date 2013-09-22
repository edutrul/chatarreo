<?php
/**
 * @file
 * vehiculo.features.inc
 */

/**
 * Implements hook_node_info().
 */
function vehiculo_node_info() {
  $items = array(
    'vehiculos' => array(
      'name' => t('Vehiculos'),
      'base' => 'node_content',
      'description' => t('Tipo de Contenido Vehiculo'),
      'has_title' => '1',
      'title_label' => t('BUSQUEDA_PLACA'),
      'help' => '',
    ),
  );
  return $items;
}
