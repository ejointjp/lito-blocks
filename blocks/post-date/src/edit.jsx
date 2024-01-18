import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function edit({ attributes, setAttributes }) {
  const { publishedLabel, updatedLabel, hidePublishDate } = attributes;

  return (
    <>
      <div {...useBlockProps({ className: 'post-date' })}>
        <div className="post-date-item post-date-published">
          <span className="post-date-label">{publishedLabel}</span>
          <span className="post-date-content">投稿日</span>
        </div>
        <div className="post-date-item post-date-updated">
          <span className="post-date-label">{updatedLabel}</span>
          <span className="post-date-content">最終更新日</span>
        </div>
      </div>

      <InspectorControls>
        <PanelBody title="設定">
          <TextControl
            label="投稿日のラベル"
            value={publishedLabel}
            onChange={(value) => setAttributes({ publishedLabel: value })}
          />
          <TextControl
            label="最終更新日のラベル"
            value={updatedLabel}
            onChange={(value) => setAttributes({ updatedLabel: value })}
          />
          <ToggleControl
            label="投稿日と最終更新日が異なる場合に投稿日を隠す"
            checked={hidePublishDate}
            onChange={(value) => setAttributes({ hidePublishDate: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>{/* ブロックのプレビューまたはフロントエンドでの表示 */}</div>
    </>
  );
}
