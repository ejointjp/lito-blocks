<?php

/**
 * Plugin Name:       Litography Blocks - Text Count
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
function litob_text_count_init() {
  register_block_type(__DIR__ . '/build', [
    'render_callback' => 'litob_text_count_render_callback',
    'attributes' => [
      'wordsPerMinute' => [
        'type' => 'number',
        'default' => 500,
      ],
      'text' => [
        'type' => 'string',
        'default' => '',
      ],
      'showType' => [
        'type' => 'string',
        'default' => 'textCount',
      ],
      'showAsApproximate' => [
        'type' => 'boolean',
        'default' => true,
      ],
      'preText' => [
        'type' => 'string',
        'default' => '',
      ],
      'postText' => [
        'type' => 'string',
        'default' => '文字',
      ],
    ],
  ]);
}
add_action('init', 'litob_text_count_init');

function litob_text_count_render_callback($attributes, $content) {
  // 記事の内容を取得
  $content = get_the_content();

  // HTMLタグとショートコードを除去
  $text = wp_strip_all_tags(strip_shortcodes($content));

  // 文字数を計算
  $cleaned_word_count = mb_strlen($text);

  // 文字数を約表示にする
  $word_count = $attributes['showAsApproximate']
    ? round($cleaned_word_count / 50) * 50
    : $cleaned_word_count;

  // 読了時間を計算（デフォルトは1分あたり300文字とする）
  $words_per_minute = $attributes['wordsPerMinute'];
  $reading_time = ceil($cleaned_word_count / $words_per_minute);

  // 表示する数字
  $count = $attributes['showType'] === 'readingTime' ? $reading_time : $word_count;

  $placeholder = $attributes['showType'] === 'readingTime' ? '読了時間' : '文字数';
  $show = $count ? $count : 0;

  return sprintf(
    '<div class="wp-block-lito-text-count"><span>%s</span><span>%s</span><span>%s</span></div>',
    $attributes['preText'],
    $show,
    $attributes['postText']
  );
}
