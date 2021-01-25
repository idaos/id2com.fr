<?php


function ut_child_theme_enqueue_styles() {

    $parent_style = 'ut-main-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'ut-child-style',
                     get_stylesheet_directory_uri() . '/style.css',
                     array( $parent_style )
                    );

}

add_action( 'wp_enqueue_scripts', 'ut_child_theme_enqueue_styles' );



/*
 * Load Custom JS
 */

function footer_adding_scripts() {
    wp_register_script('kz_main', get_stylesheet_directory_uri() . '/js/kz_main.js', array('jquery'),false, true);
    wp_enqueue_script('kz_main');
} 
add_action( 'wp_enqueue_scripts', 'footer_adding_scripts', 999 ); 



/**
 * This is a Contact Form 7 hook preventing spam on contact forms
 */

add_action( 'wpcf7_before_send_mail', 'wpcf7_validation_js' );
function wpcf7_validation_js($contact_form){

    // Get form settings
    $current_mail_array = $contact_form->prop('mail');

    // Get form data
    $submission = WPCF7_Submission::get_instance();
    $posted_data = $submission->get_posted_data();

    // Check if JS has validate the form (see main.js)
    if( $posted_data['validation-area'] != "humanDetected" ){
        $submission->skip_mail = true;
    }

    // Apply new properties
    $contact_form->set_properties(array('mail'=>$current_mail_array));
}
