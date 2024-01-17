<?php

/**
 * Plugin Name:       LitoBlocks - Post
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

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function litob_svg_site_logo_init() {
	register_block_type(__DIR__ . '/build', [
		"render_callback" => "litob_post_date_render_callback", // レンダリングする関数名を指定

		//属性を設定（連想配列で指定）
		"attributes" => [
			"twitter" => [
				"type" => "boolean",
				"default" => true,
			],
			"pre-post" => [
				"type" => 'string',
				"default" => "投稿日"
			],
			"pre-update" => [
				"type" => 'string',
				"default" => "最終更新日"
			]
		],
	]);
}
add_action('init', 'litob_svg_site_logo_init');

function litob_post_date_callback($attributes, $content) {
	$post_id = get_the_ID();
	$post_date = get_the_date('', $post_id);
	$last_updated = get_the_modified_date('', $post_id);

	return $post_id;
}
