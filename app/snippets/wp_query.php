<?php
//Вывод записей
$args = array(
	'post_type' => 'portfolio',
	'posts_per_page' => -1
);
$portfolio = new WP_Query( $args );
?>

<?php if( $portfolio->have_posts() ) : while ( $portfolio->have_posts() ) : $portfolio->the_post(); ?>

	<!-- Записи -->

<?php endwhile; else: ?>

	<!-- Нет записей -->

<?php endif; ?>
