<?php
/**
 * @file
 * feature_menu_plataforma.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function feature_menu_plataforma_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-plataforma.
  $menus['menu-plataforma'] = array(
    'menu_name' => 'menu-plataforma',
    'title' => 'Plataforma',
    'description' => 'Menú de opciones de taxonomía plataforma',
    'language' => 'und',
    'i18n_mode' => '0',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Menú de opciones de taxonomía plataforma');
  t('Plataforma');


  return $menus;
}
