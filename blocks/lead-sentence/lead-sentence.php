<?php
/**
 * Plugin Name:       Lito Blocks - Lead Sentence
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
function litob_lead_sentence_init() {
  register_block_type(__DIR__ . '/build', [
    'render_callback' => 'litob_lead_sentence_render',
    'attributes' => [
      'excerptLength' => [
        'type' => 'number',
        'default' => 100,
      ],
      'moreText' => [
        'type' => 'string',
        'default' => '',
      ],
    ],
  ]);
}
add_action('init', 'litob_lead_sentence_init');

function litob_lead_sentence_render($attributes) {
  global $post;
  $content = $post->post_content;

  $moreText = $attributes['moreText'] ? $attributes['moreText'] : '続きを読む';
  $next_btn = sprintf(
    '<p class="wp-block-litob-lead-sentense-more-button"><a href="%s">%s</a></p>',
    get_permalink(get_the_ID()),
    $moreText
  );

  // moreタグがあるかチェック
  if (litob_has_more_tag($content)) {
    $content = explode('<!-- wp:more -->', $content)[0];
  } else {
    // moreタグがない場合の処理（例えば、コンテンツを切り詰めるなど）
    $content = wp_trim_words($content, $attributes['excerptLength'], '...');
  }

  $html = '<div class="wp-block-lito-lead-sentence">';
  $html .= '<div class="litob-inner-blocks">' . $content . $next_btn . '</div>';
  $html .= '</div>';

  return $html;
}

// moreタグがあるかをチェックする
function litob_has_more_tag($content) {
  error_log('strops ' . strpos($content, '<!-- wp:more -->'));
  return strpos($content, '<!-- wp:more -->') !== false;
}
