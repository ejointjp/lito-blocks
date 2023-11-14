import icons from "../../../helpers/material-symbols";
import { icon } from "../../../helpers/icon";
import { InnerBlocks, useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, BaseControl } from "@wordpress/components";

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
          <BaseControl label="アラートアイコンを選択" id="humi/alert/icon">
            <div className="humib-editor-icon">
              {icons.map((icon, i) => {
                const isCurrent = icon.value === iconName;

                return (
                  <div
                    key={i}
                    className={`humib-editor-icon-item ${isCurrent ? "current" : ""}`}
                    onClick={() => onClickIconButton(icon)}
                  >
                    {icon.value !== "" ? (
                      <span className="material-symbols-outlined">{icon.value}</span>
                    ) : (
                      <div className="humib-editor-icon-item-blank">なし</div>
                    )}
                  </div>
                );
              })}
            </div>
          </BaseControl>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="wp-block-humi-alert-inner">
          {iconName !== "" && (
            <span className="material-symbols-outlined humib-icon">{iconName}</span>
          )}
          <div className="humib-inner-blocks">
            <InnerBlocks />
          </div>
        </div>
      </div>
    </>
  );
}
