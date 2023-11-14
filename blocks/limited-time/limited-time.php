<?php

/**
 * Plugin Name:       Litography Blocks - Limited Time
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       litography-blocks
 *
 * @package           litography-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function litob_limited_time_init() {
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'litob_limited_time_init');

// DateTime設定に応じて非表示にする
function litob_date_time($content, $block) {
	// Dates entered in the block editor are localized.
	$attributes      = $block['attrs'];
	$start_date_time = isset($attributes['startDateTime']) ? $attributes['startDateTime'] : false;
	$end_date_time   = isset($attributes['endDateTime']) ? $attributes['endDateTime'] : false;

	if (!$start_date_time && !$end_date_time) {
		return $content;
	}

	$current_date_time = wp_date('Y-m-d\TH:i:s');

	if ($start_date_time) {
		if ($start_date_time > $current_date_time) {
			return '';
		}
	}

	if ($end_date_time) {
		if ($end_date_time < $current_date_time) {
			return '';
		}
	}

	return $content;
}
add_action('render_block', 'litob_date_time', 10, 2);
