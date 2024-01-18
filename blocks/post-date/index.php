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
function litob_post_date_init() {
  register_block_type(__DIR__ . '/build', [
    "render_callback" => "litob_post_date_render_callback", // レンダリングする関数名を指定

    //属性を設定（連想配列で指定）
    "attributes" => [
      "twitter" => [
        "type" => "boolean",
        "default" => true,
      ],
      "publishedLabel" => [
        "type" => 'string',
        "default" => "投稿日 "
      ],
      "updatedLabel" => [
        "type" => 'string',
        "default" => "最終更新日 "
      ],
      "hidePublishDate" => [
        "type" => "boolean",
        "default" => false,
      ],
      "className" => [
        "type" => "string"
      ],
      "fontSize" => [
        "type" => "string"
      ]
    ],
  ]);
}
add_action('init', 'litob_post_date_init');

function litob_post_date_render_callback($attributes, $content) {
  $post_id = get_the_ID();
  $published = get_the_date('', $post_id);
  $updated = get_the_modified_date('', $post_id);

  $published_format = get_the_date('Y-m-d', $post_id);
  $updated_format = get_the_modified_date('Y-m-d', $post_id);

  // スタイルタイプを取得
  $classname = isset($attributes['className']) ? $attributes['className'] : '';

  $html = '<div class="wp-block-lito-post-date post-date ' . esc_attr($classname) . '">';

  // 投稿日のHTMLを追加する条件
  if ($published_format === $updated_format || !$attributes['hidePublishDate']) {
    $html .= '<div class="post-date-item post-date-published">';
    $html .=   '<span class="post-date-label">' . esc_html($attributes['publishedLabel']) . '</span>';
    $html .=   '<time class="post-date-content" itemprop="datePublished" datetime="' . esc_attr($published_format) . '">' . esc_html($published) . '</time>';
    $html .= '</div>';
  }

  // 最終更新日のHTMLを追加する条件
  if ($published_format !== $updated_format) {
    $html .= '<div class="post-date-item post-date-updated">';
    $html .=    '<span class="post-date-label">' . esc_html($attributes['updatedLabel']) . '</span>';
    $html .=    '<time class="post-date-content" itemprop="dateModified" datetime="' . esc_attr($updated_format) . '">' . esc_html($updated) . '</time>';
    $html .= '</div>';
  }

  $html .=  '</div>';

  return $html;
}

register_block_style('lito/post-date', [
  'name' => 'icon',
  'label' => 'アイコン'
]);
