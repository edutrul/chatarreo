<?php
/**
 * @file
 * feature_menu_tipoweb.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function feature_menu_tipoweb_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-tipo-de-web.
  $menus['menu-tipo-de-web'] = array(
    'menu_name' => 'menu-tipo-de-web',
    'title' => 'Tipo de Web',
    'description' => 'Menús para los tipos de web según la taxonomía',
    'language' => 'und',
    'i18n_mode' => '0',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Menús para los tipos de web según la taxonomía');
  t('Tipo de Web');


  return $menus;
}
