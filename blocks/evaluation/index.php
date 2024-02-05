<?php

/**
 * Plugin Name:       LitoBlocks - Evaluation
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

namespace LITOBL\Evaluation;

if (!defined('ABSPATH')) exit; // Exit if accessed directly.

function init() {
	register_block_type(__DIR__ . '/build');
}
add_action('init', __NAMESPACE__ . '\\init');
