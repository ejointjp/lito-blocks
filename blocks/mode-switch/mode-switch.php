<?php
/**
 * Plugin Name:       Litography Blocks - Appearance Switch
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
  exit(); // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function litob_mode_switch_init() {
  register_block_type(__DIR__ . '/build', [
    'render_callback' => 'litob_mode_switch_callback',
  ]);
}
add_action('init', 'litob_mode_switch_init');

function litob_mode_switch_callback() {
  return '<div class="wp-block-lito-mode-switch"></div>';
}
