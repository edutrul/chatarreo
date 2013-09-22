<?php

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * Allows the profile to alter the site configuration form.
 */
function spanish_form_install_configure_form_alter(&$form, $form_state) {
  // Populate variables	
  $profilename = drupal_get_profile();
  $function = $profilename . '_profile_details';
  if (function_exists($function)) {
    $details = $function();
    // $details = spanish_profile_details();
    // Pre-populate the site name with the server name.
    $form['site_information']['site_name']['#default_value'] = $details['site_name'];
    $form['site_information']['site_mail']['#default_value'] = $details['site_mail'];
    $form['admin_account']['account']['name']['#default_value'] = $details['name'];
    $form['admin_account']['account']['mail']['#default_value'] = $details['mail'];
  }
}

/**
 * Allow profile to pre-select the language, skipping the selection.
 *
 */
function spanish_profile_details(){
  $details['language'] = "es";
  $details['pathauto_update_action'] = 2;
  $details['pathauto_ignore_words'] = 'a, an, as, at, before, but, by, for, from, is, in, into, like, of, off, on, onto, per, since, than, the, this, that, to, up, via, with, ¡, ¿, el, la, con, de, lo, y, del, es, en, como, por, que';
  $details['pathauto_reduce_ascii'] = TRUE;
  $details['pathauto_transliterate'] = TRUE;
  // Sistema de archivos
  $details['file_private_path'] = 'sites/default/files/private';
  // Captcha
  $details['captcha_default_challenge'] = 'image_captcha/Image';
  // Set timezone for date_timezone.module.
  $details['date_format_short'] = 'd/m/Y - H:i';
  $details['date_format_medium'] = 'D, d/m/Y - H:i';
  $details['date_format_long'] = 'l, j F, Y - H:i';
  $details['site_default_country'] = "PE"; 
  // Alter configuration form.
  $details['site_name'] = $_SERVER['SERVER_NAME'];
  $details['site_mail'] = "webmaster@" . $_SERVER['SERVER_NAME'];
  $details['name'] = "admin";
  $details['mail'] = "webmaster@" . $_SERVER['SERVER_NAME'];
  // If PROFILENAME.inc exists, override variables
  $profilename = drupal_get_profile();
  $include_file = DRUPAL_ROOT . '/profiles/' . $profilename . '/includes/' .  $profilename . '.inc';
  if (is_file($include_file)) {
    include_once $include_file;
	$function = $profilename . '_variable_set';
    if (function_exists($function)) {
      $override_details = $function();
		$details = array_merge($details, $override_details);
    }
  }
  return $details;
}