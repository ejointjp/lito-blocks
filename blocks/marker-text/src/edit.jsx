import materialIcons from "../../../helpers/material-symbols";
import { stateColors } from "../../../helpers/colors";
import { InspectorControls, useBlockProps, RichText } from "@wordpress/block-editor";
import { PanelBody, BaseControl, ColorPalette } from "@wordpress/components";

export default function edit(props) {
  const { attributes, setAttributes } = props;
  const { content, iconName, color } = attributes;
  const blockProps = useBlockProps({
    style: { "--humib-marker-text-color": color },
  });

  const onClickIconButton = (icon) => {
    if (icon.value === "") {
      setAttributes({ iconName: undefined });
    } else {
      setAttributes({
        iconName: icon.value,
        markerClassName: icon.className,
      });
    }
  };

  return (
    <div {...blockProps}>
      <InspectorControls key="setting">
        <PanelBody title="マーカーの設定" initialOpen={true}>
          <BaseControl label="マーカー" className="humib-base-control">
            <div className="humib-editor-icon">
              {materialIcons.map((icon, i) => {
                return (
                  <div
                    key={i}
                    className={
                      icon.value === iconName
                        ? "humib-editor-icon-item current"
                        : "humib-editor-icon-item"
                    }
                    onClick={() => onClickIconButton(icon)}
                  >
                    {icon.value !== "" ? (
                      <span className={icon.className}>{icon.value}</span>
                    ) : (
                      <div className="humib-editor-icon-item-blank">なし</div>
                    )}
                  </div>
                );
              })}
            </div>
          </BaseControl>
          <BaseControl label="マーカーの色" className="humib-base-control">
            <ColorPalette
              colors={stateColors}
              value={color}
              onChange={(value) => setAttributes({ color: value })}
            />
          </BaseControl>
        </PanelBody>
      </InspectorControls>
      {iconName !== "" && <span className="material-symbols-outlined humib-icon">{iconName}</span>}
      <RichText
        tagName="span"
        className="wp-block-humi-marker-text-content"
        value={content}
        onChange={(content) => setAttributes({ content })}
        placeholder={"テキストを入力"}
      />
    </div>
  );
}
