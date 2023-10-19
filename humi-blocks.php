<?php

/**
 * Plugin Name: Humi Blocks
 * Plugin URI:    
 * Description: Custom Blocks for Humi Theme.
 * Version:           0.1.0
 * Requires at least: 6.2
 * Requires PHP:      7.2
 * Author: Takashi Fujisaki
 * Author URI: https://e-joint.jp
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        
 * Text Domain:       humi-blocks
 * Domain Path:       /languages
 * 
 * @package: humi-blocks
 */

// function humi_register_blocks()
// {
//   // ここにブロックタイプを追加
//   $block_types = ['alert', 'gist', 'limited-time', 'marker-text', 'talk'];

//   foreach ($block_types as $block_type) {
//     register_block_type(__DIR__ . '/' . $block_type . '/build');
//   }
// }

// add_action('init', 'humi_register_blocks');

include plugin_dir_path(__FILE__) . './blocks/alert/alert.php';
include plugin_dir_path(__FILE__) . './blocks/gist/gist.php';
include plugin_dir_path(__FILE__) . './blocks/limited-time/limited-time.php';
include plugin_dir_path(__FILE__) . './blocks/marker-text/marker-text.php';
include plugin_dir_path(__FILE__) . './blocks/talk/talk.php';
include plugin_dir_path(__FILE__) . './blocks/share-btn/share-btn.php';
include plugin_dir_path(__FILE__) . './blocks/toc/toc.php';


/**
 * Categories
 *
 * @param array $categories Categories.
 * @param array $post Post.
 */
if (!function_exists('humi_categories')) {
  function humi_categories($categories, $post)
  {
    return array_merge(
      $categories,
      [
        [
          'slug'  => 'humi-blocks',   // ブロックカテゴリーのスラッグ.
          'title' => 'Humi'  // ブロックカテゴリーの表示名.
          // 'icon'  => 'wordpress',    //アイコンの指定（Dashicons名）.
        ]
      ]
    );
  }
  add_filter('block_categories_all', 'humi_categories', 10, 2);
}

function humi_blocks_enqueue_block_editor_assets()
{
  /**
   * PHPで生成した値をJavaScriptに渡す
   *
   * 第1引数: 渡したいJavaScriptの名前（wp_enqueue_scriptの第1引数に書いたもの）
   * 第2引数: JavaScript内でのオブジェクト名
   * 第3引数: 渡したい値の配列
   */
  wp_localize_script('humi-share-btn-block-editor', 'SUB', [
    'api' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('humi-ajax'),
    'homeUrl' => home_url(),
    'postUrl' => get_permalink(get_the_ID()),
    'postTitle' => get_the_title(get_the_ID()),
    'restApi' => home_url('/wp-json/wp/v2/')
  ]);
}

add_action('enqueue_block_editor_assets', 'humi_blocks_enqueue_block_editor_assets');
