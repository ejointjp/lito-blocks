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
      ]
    ]
  ]);
}
add_action('init', 'litob_inline_svg_init');

function litob_inline_svg_render_callback($attributes) {
  $url = $attributes['url'];
  if ($url === '') return;

  $class_list = ['wp-block-lito-inline-svg'];
  $align_class = isset($attributes['align']) ? 'align' . $attributes['align'] : '';
  if ($align_class) {
    array_push($class_list, $align_class);
  }
  $class_string = implode(' ', $class_list);


  $alt = get_post_meta($attributes['id'], '_wp_attachment_image_alt');

  $alt = !empty($alt[0]) ? esc_html($alt[0]) : '';
  $target = $attributes['openNewTab'] ? ' target="_blank"' : '';

  // URLが存在し、有効であることを確認
  if (!empty($url) && filter_var($url, FILTER_VALIDATE_URL)) {
    $svg_content = @file_get_contents($url);
    error_log('aaa' . print_r($svg_content, true));
    // SVGコンテンツが取得できた場合、サニタイズを行う
    if ($svg_content) {
      $sanitized_svg = litob_sanitize_svg($svg_content);

      // 幅と単位の属性を取得し、スタイル文字列を生成
      $width = $attributes['width'];
      $unit = $attributes['unit'];
      $style = sprintf('width: %d%s;', $width, $unit);

      // サニタイズされたSVGコンテンツをスタイル付きで出力
      $html = sprintf('<div class="%s">', $class_string);
      if ($attributes['linkToHome']) {
        $html .= sprintf('<a%s href="%s" alt="%s">', $target, home_url('/'), $alt);
      }
      $html .= sprintf('<div class="wp-block-lito-inline-svg-item" style="%s">%s</div>', $style, $sanitized_svg);
      if ($attributes['linkToHome']) {
        $html .= '</a>';
      }
      $html .= '</div>';

      return $html;
    } else {
      return print_r($svg_content, true);
    }
  }

  // SVGコンテンツが取得できなかった、またはURLが無効だった場合は何も出力しない
  return '';
}

// SVGコンテンツをサニタイズする関数
if (!function_exists('litob_sanitize_svg')) {
  function litob_sanitize_svg($svg_content) {
    // 許可されるSVGのタグと属性を定義します
    $allowed_tags = [
      'svg' =>
      [
        'class' => true,
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
