<?php

//Добавление <title>:
add_theme_support( 'title-tag' );

//Добавление скриптов и стилей
//functions.php
function my_theme_load_resources() {
	wp_enqueue_style( 'maincss', get_template_directory_uri() . '/css/main.css', array(), '0.1' );	
	wp_enqueue_script( 'commonjs', get_template_directory_uri() . '/js/common.js', array(), '0.1', true ); //true - значит скрипты в подвале
};
add_action( 'wp_enqueue_scripts', 'my_theme_load_resources' );
