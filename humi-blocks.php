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

include plugin_dir_path(__FILE__) . "./blocks/alert/alert.php";
include plugin_dir_path(__FILE__) . "./blocks/faq/faq.php";
include plugin_dir_path(__FILE__) . "./blocks/gist/gist.php";
include plugin_dir_path(__FILE__) . "./blocks/limited-time/limited-time.php";
include plugin_dir_path(__FILE__) . "./blocks/marker-text/marker-text.php";
include plugin_dir_path(__FILE__) . "./blocks/profile/profile.php";
include plugin_dir_path(__FILE__) . "./blocks/share-btn/share-btn.php";
include plugin_dir_path(__FILE__) . "./blocks/talk/talk.php";
include plugin_dir_path(__FILE__) . "./blocks/text-count/text-count.php";
include plugin_dir_path(__FILE__) . "./blocks/toc/toc.php";

/**
 * Categories
 *
 * @param array $categories Categories.
 * @param array $post Post.
 */
if (!function_exists("humib_categories")) {
  function humib_categories($categories, $post) {
    return array_merge($categories, [
      [
        "slug" => "humi-blocks", // ブロックカテゴリーのスラッグ.
        "title" => "Humi Blocks", // ブロックカテゴリーの表示名.
        // 'icon'  => 'wordpress',    //アイコンの指定（Dashicons名）.
      ],
    ]);
  }
  add_filter("block_categories_all", "humib_categories", 10, 2);
}

// フロント用アセット
function humib_enqueue() {
  wp_enqueue_style(
    "humib",
    plugin_dir_url(__FILE__) . "css/style.css",
    ["humi"],
    filemtime(plugin_dir_path(__FILE__) . "/css/style.css"),
    ""
  );

  // Google Material Icons
  wp_enqueue_style(
    "humi-google-material-symbols",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
    [],
    ""
  );
}
add_action("enqueue_block_assets", "humib_enqueue");

// エディター用アセット
function humib_editor_enqueue() {
  wp_enqueue_style(
    "humib-editor",
    plugin_dir_url(__FILE__) . "css/editor-style.css",
    [],
    filemtime(plugin_dir_path(__FILE__) . "/css/editor-style.css"),
    ""
  );
}
add_action("enqueue_block_editor_assets", "humib_editor_enqueue");

function humib_enqueue_block_editor_assets() {
  /**
   * PHPで生成した値をJavaScriptに渡す
   *
   * 第1引数: 渡したいJavaScriptの名前（wp_enqueue_scriptの第1引数に書いたもの）
   * 第2引数: JavaScript内でのオブジェクト名
   * 第3引数: 渡したい値の配列
   */
  wp_localize_script("humi-share-btn-block-editor", "SUB", [
    "api" => admin_url("admin-ajax.php"),
    "nonce" => wp_create_nonce("humi-ajax"),
    "homeUrl" => home_url(),
    "postUrl" => get_permalink(get_the_ID()),
    "postTitle" => get_the_title(get_the_ID()),
    "restApi" => home_url("/wp-json/wp/v2/"),
  ]);
}

add_action("enqueue_block_editor_assets", "humib_enqueue_block_editor_assets");
