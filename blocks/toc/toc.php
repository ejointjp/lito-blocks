<?php

/**
 * Plugin Name:       Litography Blocks - Toc
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lito-blocks
 *
 * @package           lito-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function litob_toc_init() {
  register_block_type(__DIR__ . "/build", [
    "render_callback" => "litob_toc_render_callback",
    // 'attributes' => [
    // 	'postCount' => [
    // 		'type' => 'number',
    // 		'default' => 10 // デフォルトの投稿数
    // 	]
    // ]
  ]);
}
add_action("init", "litob_toc_init");

function litob_toc_render_callback($attributes) {
  return '<div class="wp-block-lito-toc"></div>';
}

// scriptタグにdeferを付与
function litob_add_defer_attribute($tag, $handle) {
  if ("lito-toc-view-script" === $handle) {
    return str_replace(" src", ' defer="defer" src', $tag);
  }
  return $tag;
}
add_filter("script_loader_tag", "litob_add_defer_attribute", 10, 2);
