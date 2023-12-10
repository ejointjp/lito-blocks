<?php

/**
 * Plugin Name:       Litography Blocks - Inline SVG
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
function litob_inline_svg_init() {
  register_block_type(__DIR__ . '/build', [
    'render_callback' => 'litob_inline_svg_render_callback',
    'attributes' => [
      'width' => [
        'type' => 'number',
        'default' => 200,
      ],
      'height' => [
        'type' => 'number',
        'default' => 0,
      ],
      'unit' => [
        'type' => 'string',
        'default' => 'px', // SVGでは 'px' の方が一般的なので、ここを 'px' に変更しています
      ],
      'id' => [
        'type' => 'number',
        'default' => 0
      ],
      'url' => [
        'type' => 'string',
        'default' => '',
      ],
      'linkToHome' => [
        'type' => 'boolean',
        'default' => false
      ],
      'openNewTab' => [
        'type' => 'boolean',
        'default' => false
      ],
      "textAlign" => [
        'type' => 'string',
        'default' => ''
      ],
    ]
  ]);
}
add_action('init', 'litob_inline_svg_init');

function litob_inline_svg_render_callback($attributes) {
  $id = $attributes['id'];

  // SVG以外なら空の文字列を返す
  if ('image/svg+xml' !== get_post_mime_type($id)) {
    return '';
  }

  $image_path = get_attached_file($id);
  // SVG要素が取得できなければ空の文字列を返す
  if (!$svg_content = file_get_contents($image_path)) {
    return '';
  }

  // サニタイズを行う
  $sanitized_svg = litob_sanitize_svg($svg_content);
  $width = $attributes['width'] > 0 ? $attributes['width'] . $attributes['unit'] : 'auto';
  $height = $attributes['height'] > 0 ? $attributes['height'] . $attributes['unit'] : 'auto';
  $style = sprintf('style="width:%s;height:%s;"', $width, $height);
  $styled_svg = str_replace('<svg', '<svg ' . $style, $sanitized_svg);

  $alt = get_post_meta($attributes['id'], '_wp_attachment_image_alt');
  $alt = !empty($alt[0]) ? esc_html($alt[0]) : '';

  if ($attributes['linkToHome']) {
    $target = $attributes['openNewTab'] ? ' target="_blank"' : '';
    $styled_svg = sprintf('<a href="%s"%s>%s</a>', home_url(), $target, $styled_svg);
  }

  $align_style = isset($attributes['textAlign']) && $attributes['textAlign'] ? ' style="text-align:' . $attributes["textAlign"] . '"' : '';

  $html = sprintf('<div class="wp-block-lito-inline-svg"%s>', $align_style);
  $html .= $styled_svg;
  $html .= '</div>';


  // サニタイズされたSVGコンテンツをスタイル付きで出力
  // $html = sprintf('<div class="%s">', $class_string);
  // $html = '<div class="wp-block-lito-inline-svg">';
  // if ($attributes['linkToHome']) {
  //   $html .= sprintf('<a%s href="%s" alt="%s">', $target, home_url('/'), $alt);
  // }
  // $html .= sprintf('<div class="wp-block-lito-inline-svg-item" style="%s">%s</div>', $style, $sanitized_svg);
  // if ($attributes['linkToHome']) {
  //   $html .= '</a>';
  // }
  // $html .= '</div>';

  // return $html;

  return $html;
}

// SVGコンテンツをサニタイズする関数
if (!function_exists('litob_sanitize_svg')) {
  function litob_sanitize_svg($svg_content) {
    // 許可されるSVGのタグと属性を定義します
    $allowed_tags = [
      'svg' =>
      [
        'class' => true,
        'style' => true,
        'aria-hidden' => true,
        'aria-labelledby' => true,
        'role' => true,
        'xmlns' => true,
        'width' => true,
        'height' => true,
        'viewbox' => true, // しばしば viewBox と書かれますが、小文字で始まる必要があります。
      ],
      'defs' => [],
      'style' => ['type' => true],
      'g' => [
        'fill' => true,
        'class' => true
      ],
      'title' => ['title' => true],
      'path' => [
        'd' => true,
        'fill' => true,
        'class' => true
      ],
      // その他のSVGタグとその属性...
    ];

    // wp_kses関数を使用してSVGコンテンツをサニタイズします
    return wp_kses($svg_content, $allowed_tags);
  }
}


//SVGをアップロード
function add_file_types_to_uploads($file_types) {

  $new_filetypes = array();
  $new_filetypes['svg'] = 'image/svg+xml';
  $file_types = array_merge($file_types, $new_filetypes);

  return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');
