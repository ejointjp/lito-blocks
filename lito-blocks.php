<?php

/**
 * Plugin Name: LitoBlocks
 * Plugin URI:
 * Description: Custom Blocks for Litography Theme.
 * Version:           0.1.0
 * Requires at least: 6.2
 * Requires PHP:      7.2
 * Author: Takashi Fujisaki
 * Author URI: https://e-joint.jp
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:
 * Text Domain:       lito-blocks
 * Domain Path:       /languages
 *
 * @package: lito-blocks
 */

// 最速で.darkクラスをつける
function litob_add_dark_mode_script() {
?>
  <script>
    if (localStorage.getItem('LITOB_THEME') === 'dark') {
      document.documentElement.classList.add('dark')
    }
  </script>
  <!-- <style>
    :root.dark,
    :root.dark :where(img:not(#wpadminbar img), video, iframe, #wpadminbar, .ignore-dark) {
      filter: invert(1) hue-rotate(180deg);
    }
  </style> -->
<?php
}
add_action('wp_head', 'litob_add_dark_mode_script', 0);



include plugin_dir_path(__FILE__) . './blocks/alert/alert.php';
include plugin_dir_path(__FILE__) . './blocks/faq/faq.php';
include plugin_dir_path(__FILE__) . './blocks/gist/gist.php';
include plugin_dir_path(__FILE__) . './blocks/inline-svg/inline-svg.php';
include plugin_dir_path(__FILE__) . './blocks/lead-sentence/lead-sentence.php';
include plugin_dir_path(__FILE__) . './blocks/limited-time/limited-time.php';
include plugin_dir_path(__FILE__) . './blocks/marker-text/marker-text.php';
include plugin_dir_path(__FILE__) . './blocks/mode-switch/mode-switch.php';
include plugin_dir_path(__FILE__) . './blocks/post-date/index.php';
include plugin_dir_path(__FILE__) . './blocks/profile/profile.php';
include plugin_dir_path(__FILE__) . './blocks/share-btn/share-btn.php';
include plugin_dir_path(__FILE__) . './blocks/talk/talk.php';
include plugin_dir_path(__FILE__) . './blocks/text-count/text-count.php';
include plugin_dir_path(__FILE__) . './blocks/toc/toc.php';

function litob_setup() {
  add_theme_support('editor-styles');
  add_editor_style('css/editor-style.css');
}
add_action('init', 'litob_setup');


/**
 * Categories
 *
 * @param array $categories Categories.
 * @param array $post Post.
 */
if (!function_exists('litob_categories')) {
  function litob_categories($categories, $post) {
    return array_merge($categories, [
      [
        'slug' => 'lito-blocks', // ブロックカテゴリーのスラッグ.
        'title' => 'LitoBlocks', // ブロックカテゴリーの表示名.
        // 'icon'  => 'wordpress',    //アイコンの指定（Dashicons名）.
      ],
    ]);
  }
  add_filter('block_categories_all', 'litob_categories', 10, 2);
}

// フロント・エディター用アセット
function litob_enqueue() {
  // Google Material Icons
  wp_enqueue_style(
    'litob-google-material-symbols',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
    [],
    ''
  );

  wp_enqueue_style(
    'litob',
    plugin_dir_url(__FILE__) . 'css/style.css',
    [],
    filemtime(plugin_dir_path(__FILE__) . '/css/style.css'),
    ''
  );
}
add_action('enqueue_block_assets', 'litob_enqueue');

// フロントに読み込み
if (!function_exists('litob_variables_enqueue')) {
  function litob_variables_enqueue() {
    wp_enqueue_style(
      'litob-variables',
      plugins_url('/css/variables.css', __FILE__),
      [],
      filemtime(plugin_dir_path(__FILE__) . '/css/variables.css')
    );
  }
  add_action('enqueue_block_assets', 'litob_variables_enqueue', 10);
}


// エディター用アセット
function litob_editor_enqueue() {
  wp_enqueue_style(
    'litob-editor',
    plugin_dir_url(__FILE__) . '/css/editor-style.css',
    ['litob'],
    filemtime(plugin_dir_path(__FILE__) . '/css/editor-style.css'),
    ''
  );
}
add_action('enqueue_block_editor_assets', 'litob_editor_enqueue');
