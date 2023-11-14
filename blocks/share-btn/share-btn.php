<?php

/**
 * Plugin Name:       Humi Blocks - Share Btn
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       humi-blocks
 *
 * @package           humi-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function humib_share_button_init() {
	register_block_type(
		__DIR__ . '/build',
		[
			'render_callback' => 'humib_share_button_render_callback', // レンダリングする関数名を指定

			//属性を設定（連想配列で指定）
			'attributes' => [
				'twitter' => [
					'type' => 'boolean',
					'default' => true
				],
				'facebook' => [
					'type' => 'boolean',
					'default' => true
				],
				'hatebu' => [
					'type' => 'boolean',
					'default' => true
				],
				'pocket' => [
					'type' => 'boolean',
					'default' => true
				],
				'twitterVia' => [
					'type' => 'string',
					'default' => ''
				],
				'twitterHashTags' => [
					'type' => 'string',
					'default' => ''
				],
			]
		]
	);
}
add_action('init', 'humib_share_button_init');

function humib_share_button_render_callback($block_attributes, $content) {
	$html = '<div class="wp-block-humi-share-btn">';

	// Twitter
	if ($block_attributes['twitter']) :
		$base_url = 'https://twitter.com/share';
		$args = [
			'text' => get_the_title(get_the_ID()),
			'url' => get_permalink(get_the_ID()),
			'via' => $block_attributes['twitterVia'],
			'hashtags' => $block_attributes['twitterHashTags']
		];
		$share_url = add_query_arg($args, $base_url);
		ob_start();

?>
		<a class="wp-block-humi-share-btn-item" href="<?php echo esc_url($share_url); ?>" target="_blank" rel="nofollow noopener noreferrer">
			<span class="wp-block-humi-share-btn-icon">
				<?php include plugin_dir_path(__FILE__) . '../../svg/x.svg'; ?>
			</span>
			<span class="wp-block-humi-share-btn-label">ポスト</span>
		</a>
	<?php
		$html .= ob_get_clean();
	endif;

	// Facebook
	if ($block_attributes['facebook']) :
		$share_url = "https://www.facebook.com/sharer/sharer.php?u=" .  get_permalink(get_the_ID());
		ob_start();
	?>
		<a class="wp-block-humi-share-btn-item" href="<?php echo esc_url($share_url); ?>" target="_blank" rel="nofollow noopener noreferrer">
			<?php //get_template_part('components/icon/facebook');
			?>
			<span class="wp-block-humi-share-btn-icon">
				<?php include plugin_dir_path(__FILE__) . '../../svg/facebook.svg'; ?>
			</span>
			<span class="wp-block-humi-share-btn-label">シェア</span>
		</a>
	<?php
		$html .= ob_get_clean();
	endif;

	// Hatebu
	if ($block_attributes['hatebu']) :
		$base_url = 'https://b.hatena.ne.jp/entry/panel/';
		$args = [
			'url' => get_permalink(get_the_ID()),
			'btitle' => get_the_title(get_the_ID())
		];
		$share_url = add_query_arg($args, $base_url);
		ob_start();
	?>
		<a class="wp-block-humi-share-btn-item" href="<?php echo esc_url($share_url); ?>" target="_blank" rel="nofollow noopener noreferrer">
			<span class="wp-block-humi-share-btn-icon">
				<?php include plugin_dir_path(__FILE__) . '../../svg/hatebu.svg'; ?>
			</span>
			<span class="wp-block-humi-share-btn-label">ブックマーク</span>
		</a>
	<?php
		$html .= ob_get_clean();
	endif;

	// Pocket
	if ($block_attributes['pocket']) :
		ob_start();
		$share_url = "https://getpocket.com/save?url=" .  get_permalink(get_the_ID());
	?>
		<a class="wp-block-humi-share-btn-item" href="<?php echo esc_url($share_url); ?>" target="_blank" rel="nofollow noopener noreferrer">
			<span class="wp-block-humi-share-btn-icon">
				<?php include plugin_dir_path(__FILE__) . '../../svg/pocket.svg'; ?>
			</span>
			<span class="wp-block-humi-share-btn-label">Pocket</span>
		</a>
<?php
		$html .= ob_get_clean();
	endif;

	$html .= '</div>';

	return $html;
}
