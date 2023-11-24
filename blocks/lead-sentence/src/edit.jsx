import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';

export default function edit(props) {
  const blockProps = useBlockProps();
  const { attributes, setAttributes } = props;
  const { excerptLength, moreText } = attributes;

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="設定">
          <RangeControl
            label="抜粋の長さ"
            value={excerptLength}
            onChange={(value) => setAttributes({ excerptLength: value })}
            min={10}
            max={500}
          />
          {/* <TextControl
            label="「続きを読む」のリンクテキスト"
            value={moreText}
            onChange={(value) => setAttributes({ moreText: value })}
          /> */}
        </PanelBody>
      </InspectorControls>

      <p>リード文</p>
      <p className="wp-block-litob-lead-sentense-more-button">
        <TextControl
          placeholder="「続きを読む」のリンクテキスト"
          value={moreText}
          onChange={(value) => setAttributes({ moreText: value })}
        />
      </p>
    </div>
  );
}
