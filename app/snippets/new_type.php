<?php
//Добавление нового типа записей
//functions.php
add_action( 'init', 'tpl_portfolio' );
function tpl_portfolio() {
	register_post_type( 'portfolio', array(
		'public' => true,
		'labels' => array(
			'name' => 'Портфолио',
			'all_items' => 'Все работы',
			'add_new' => 'Добавить работу',
			'add_new_item' => 'Добавление работы в портфолио'
			),
		'supports' => array( 'title', 'thumbnail', 'editor' ),
		'taxonomies' => array( 'post_tag', 'category ')
		)
	);
};

