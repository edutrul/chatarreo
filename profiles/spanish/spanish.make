; Make file for Spanish Profile.
api = 2
core = 7.x

projects[] = drupal

; Close future
; translations[] = es

; Modules
projects[] = backup_migrate
projects[captcha][version] = "1.0-beta2"
projects[] = ckeditor
projects[] = css_emimage
projects[] = ctools
projects[] = devel
projects[] = dhtml_menu
projects[] = ds
projects[] = filefield_paths
projects[] = imce
projects[] = l10n_client
projects[] = l10n_update
projects[] = libraries
projects[] = page_title
projects[] = pathauto
projects[] = entity
projects[] = entityreference
projects[] = superfish
projects[] = token
projects[] = transliteration
projects[] = views
projects[] = admin_menu
projects[] = fusion_accelerator
projects[] = diff
projects[] = google_analytics
projects[] = typogrify

; themes
projects[] = fusion
projects[] = tao
projects[] = rubik

; CSS3 Media Queries
libraries[jquery_ui][download][type] = "get"
libraries[jquery_ui][download][url] = "http://css3-mediaqueries-js.googlecode.com/files/css3-mediaqueries.js"
libraries[jquery_ui][directory_name] = "css3-mediaqueries"
libraries[jquery_ui][destination] = "libraries"

; PLUPLOAD
libraries[jquery_ui][download][type] = "get"
libraries[jquery_ui][download][url] = "https://github.com/downloads/moxiecode/plupload/plupload_1_5_4.zip"
libraries[jquery_ui][directory_name] = "plupload"
libraries[jquery_ui][destination] = "libraries"

; CKEditor
libraries[ckeditor][download][type]= "get"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor for Drupal/CKEditor 3.6.3 for Drupal/ckeditor_3.6.3_for_drupal_7.zip"
libraries[ckeditor][directory_name] = "ckeditor"
libraries[ckeditor][destination] = "libraries"

; PIE
libraries[ckeditor][download][type]= "get"
libraries[ckeditor][download][url] = "http://cloud.github.com/downloads/lojjic/PIE/PIE-1.0beta5.zip"
libraries[ckeditor][directory_name] = "PIE"
libraries[ckeditor][destination] = "libraries"