import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
  PanelBody,
  Button,
  BaseControl,
  RangeControl,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import {
  AlignmentToolbar,
  InspectorControls,
  BlockControls,
  MediaReplaceFlow,
} from '@wordpress/block-editor';
import { ReactSVG } from 'react-svg';

export default function edit({ attributes, setAttributes }) {
  console.log('attributes', attributes);
  const ALLOWED_MEDIA_TYPES = ['image/svg+xml'];
  const { textAlign, width, height, id, url, unit, linkToHome, openNewTab } = attributes;

  const blockProps = useBlockProps({
    style: {
      textAlign,
    },
  });
  // 単位に応じた RangeControl の設定
  const [max, setMax] = useState(unit !== 'px' ? 100 : 1000);
  const [step, setStep] = useState(unit !== 'px' ? 0.25 : 1);

  const onSelectImage = (media) => {
    console.log('media', media);
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

  const onError = (message) => {
    console.log(__(`Something went wrong, please try again. Message: ${message}`, 'lito-blocks'));
  };

  const sizeStyle = () => {
    const styles = [];
    if (width > 0) {
      styles.push(`width:${width}${unit};`);
    } else {
      styles.push('width: auto;');
    }
    if (height > 0) {
      styles.push(`height:${height}${unit};`);
    } else {
      styles.push('height: auto;');
    }

    return styles.join('');
  };

  return (
    <div {...blockProps}>
      {!url && (
        <MediaPlaceholder
          onSelect={onSelectImage}
          allowedTypes={ALLOWED_MEDIA_TYPES}
          accept={ALLOWED_MEDIA_TYPES}
          value={url}
          labels={{
            title: 'SVG Site Logo',
            instructions: __('Upload an SVG or pick one from your media library.', 'lito-blocks'),
          }}
        />
      )}

      {url && (
        <ReactSVG
          src={url}
          beforeInjection={(svg) => {
            svg.setAttribute('style', sizeStyle());
          }}
          wrapper="span"
        />
      )}

      <BlockControls>
        <AlignmentToolbar
          value={textAlign}
          onChange={(value) => setAttributes({ textAlign: value })}
        />
      </BlockControls>
      <BlockControls>
        <MediaReplaceFlow
          mediaId={id}
          mediaURL={id}
          allowedTypes={ALLOWED_MEDIA_TYPES}
          accept={ALLOWED_MEDIA_TYPES}
          onSelect={onSelectImage}
          onError={onError}
        />
      </BlockControls>

      <InspectorControls>
        <PanelBody title="設定">
          <RangeControl
            label="幅"
            value={width}
            onChange={(value) => setAttributes({ width: value })}
            min={0}
            max={max}
            step={step}
          />

          <RangeControl
            label="高さ"
            value={height}
            onChange={(value) => setAttributes({ height: value })}
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

          <BaseControl label="">
            {/* <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={ALLOWED_MEDIA_TYPES}
                value={id}
                render={({ open }) => (
                  <Button onClick={open} className="editor-post-featured-image__toggle">
                    SVG画像を設定
                  </Button>
                )}
              />
            </MediaUploadCheck> */}

            <Button
              style={{ marginTop: '0.5rem' }}
              className="is-tertiary"
              onClick={() => {
                setAttributes({ id: 0, url: '' });
              }}
            >
              画像をクリア
            </Button>
          </BaseControl>
        </PanelBody>
      </InspectorControls>
    </div>
  );
}
