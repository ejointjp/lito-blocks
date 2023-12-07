import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { ReactSVG } from 'react-svg';

export default function Controls({ attributes, setAttributes }) {
  const ALLOWED_MEDIA_TYPES = ['image/svg+xml'];
  const { width, url, unit, linkToHome, openNewTab } = attributes;

  // 単位に応じた RangeControl の設定
  const [max, setMax] = useState(unit !== 'px' ? 100 : 1000);
  const [step, setStep] = useState(unit !== 'px' ? 0.25 : 1);

  const onSelectImage = (media) => {
    // if (!media.sizes && !media.media_details?.sizes) {
    //   return;
    // }

    if (media.media_details) {
      media.sizes = media.media_details.sizes;
    }
    setAttributes({
      id: media.id,
      url: media.url,
    });
  };

  const onChangeUnit = (unit) => {
    if (unit !== 'px') {
      setMax(100);
      setStep(0.25);
    } else {
      setMax(1000);
      setStep(1);
    }
    setAttributes({ unit });
  };

  return (
    <div {...useBlockProps()}>
      {!url && (
        <MediaPlaceholder
          onSelect={onSelectImage}
          allowedTypes={ALLOWED_MEDIA_TYPES}
          accept={ALLOWED_MEDIA_TYPES}
          value={url}
          labels={{
            title: 'SVG Site Logo',
            instructions: __('Upload an SVG or pick one from your media library.', 'safe-svg'),
          }}
        />
      )}

      {url && (
        <div className="wp-block-lito-inline-svg-item" style={{ width: `${width}${unit}` }}>
          <ReactSVG
            src={url}
            // beforeInjection={(svg) => {
            //   svg.setAttribute('style', `width: ${width}${unit};`);
            // }}
          />
        </div>
      )}

      <InspectorControls>
        <PanelBody
          title={'設定'}
          className="su-components-panel__body su-components-panel__body--litobc"
        >
          <RangeControl
            label="幅"
            value={width}
            onChange={(value) => setAttributes({ width: value })}
            min={0}
            max={max}
            step={step}
          />

          <SelectControl
            label="単位"
            value={unit}
            options={[
              { label: 'px', value: 'px' },
              { label: 'em', value: 'em' },
              { label: 'rem', value: 'rem' },
            ]}
            onChange={onChangeUnit}
          />

          <ToggleControl
            label="ホームヘのリンクをつける"
            checked={linkToHome}
            onChange={(value) => setAttributes({ linkToHome: value })}
          />

          <ToggleControl
            label="新しいタブで開く"
            checked={openNewTab}
            onChange={(value) => setAttributes({ openNewTab: value })}
          />

          {/* <BaseControl label="サムネイルを手動で設定">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(value) => {
                  setAttributes({
                    thumbnailId: value.id,
                    url: value.url,
                  });
                }}
                allowedTypes={['image']}
                value={url}
                render={({ open }) => (
                  <Button onClick={open} className="editor-post-featured-image__toggle">
                    SVG画像を設定
                  </Button>
                )}
              />
            </MediaUploadCheck>

            <Button
              style={{ marginTop: '0.5rem' }}
              isTertiary
              onClick={() => {
                setAttributes({ url: '' });
              }}
            >
              クリア
            </Button>
          </BaseControl> */}
        </PanelBody>
      </InspectorControls>
    </div>
  );
}
