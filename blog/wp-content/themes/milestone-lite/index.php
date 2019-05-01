<?php
/**
 * The template for displaying home page.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package Milestone Lite
 */

get_header('new'); 
?>
<div class="row hero-banner">
    <div class="hero-banner-text-container">
        <div class="hero-banner-title-box pd-30-30">
            <h3 class="color-white clanpro-bold fz-40">Blog</h3>
            
        </div>
    </div>

</div>
<div class="container">
     <div class="pagelayout_area">
        <section class="site-main <?php if( get_theme_mod( 'removed_sidebar' ) ||  get_theme_mod( 'grid_without_sidebar' ) ) { ?>fullwidth<?php } ?>">
        	 <div class="site-bloglist <?php if( get_theme_mod( 'grid_without_sidebar' ) ) { ?>grid-layout<?php } ?>">
					<?php
                    if ( have_posts() ) :
                        // Start the Loop.
                        while ( have_posts() ) : the_post();
                            /*
                             * Include the post format-specific template for the content. If you want to
                             * use this in a child theme, then include a file called called content-___.php
                             * (where ___ is the post format) and that will be used instead.
                             */
                            get_template_part( 'acropolis-content' );
                    
                        endwhile;						
                        // Previous/next post navigation.
                        the_posts_pagination();
                    
                    else :
                        // If no content, include the "No posts found" template.
                         get_template_part( 'no-results' );
                    
                    endif;
                    ?>
                    </div><!-- site-bloglist -->
             </section>
      
         <?php if( get_theme_mod( 'removed_sidebar' ) == '' && get_theme_mod( 'grid_without_sidebar' ) == '') { ?> 
          		<?php get_sidebar();?>
        	<?php } ?>
        <div class="clear"></div>
    </div><!-- site-aligner -->
</div><!-- content -->
<?php get_footer('new'); ?>