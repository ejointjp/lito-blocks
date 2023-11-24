import icons from '../../../helpers/material-symbols';
import { icon } from '../../../helpers/icon';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, BaseControl } from '@wordpress/components';

export default function edit({ attributes, setAttributes }) {
  const { iconName } = attributes;
  const blockProps = useBlockProps();

  const onClickIconButton = (icon) => {
    setAttributes({
      iconName: icon.value,
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="アイコン" icon={icon} initialOpen={true}>
          <BaseControl label="アラートアイコンを選択" id="lito/alert/icon">
            <div className="litob-editor-icon">
              {icons.map((icon, i) => {
                const isCurrent = icon.value === iconName;

                return (
                  <div
                    key={i}
                    className={`litob-editor-icon-item ${isCurrent ? 'current' : ''}`}
                    onClick={() => onClickIconButton(icon)}
                  >
                    {icon.value !== '' ? (
                      <span className="material-symbols-outlined">{icon.value}</span>
                    ) : (
                      <div className="litob-editor-icon-item-blank">なし</div>
                    )}
                  </div>
                );
              })}
            </div>
          </BaseControl>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="alert">
          {iconName !== '' && (
            <span className="material-symbols-outlined alert-icon">{iconName}</span>
          )}
          <div className="litob-inner-blocks">
            <InnerBlocks />
          </div>
        </div>
      </div>
    </>
  );
}
