import { icon } from "../../../helpers/icon";
import materialIcons from "../../../helpers/material-symbols";
import { stateColors } from "../../../helpers/colors";

import { createBlock } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks, InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, BaseControl, ColorPalette } from "@wordpress/components";
import { select, dispatch } from "@wordpress/data";

export default function edit({ attributes, setAttributes, clientId }) {
  const { iconName, color, label } = attributes;
  const blockProps = useBlockProps({
    style: { "--litob-gist-color": color },
  });
  const allowedBlocks = ["lito/marker-text"];
  const template = [["lito/marker-text"]];

  const onClickIconButton = (icon) => {
    if (icon.value === "") {
      setAttributes({ iconName: undefined });
    } else {
      setAttributes({ iconName: icon.value });
    }

    changeChildrenValue({
      iconName: icon.value,
    });
  };

  // innerBlock要素のattributesを変更
  const changeChildrenValue = (litob_alert_) => {
    // innerBlocksの要素をすべて取得
    const children = select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
    children.forEach((child) => {
      dispatch("core/block-editor").updateBlockAttributes(child.clientId, litob_alert_);
    });
  };

  // innerBlockを追加する
  const addInnerBlock = () => {
    let children = select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
    const lastChild = children.pop();
    const { iconName, color } = lastChild.attributes;

    dispatch("core/block-editor").insertBlocks(createBlock("lito/marker-text"), 9999, clientId);

    children = select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
    const newChild = children.pop();

    newChild.attributes.iconName = iconName;
    newChild.attributes.color = color;
  };

  return (
    <div {...blockProps}>
      <InspectorControls key="setting">
        <PanelBody title="マーカーとカラーの一括設定" icon={icon} initialOpen={true}>
          <BaseControl
            label="マーカー"
            help="マーカーを一括で変更します。子要素単体でマーカーを指定した場合はそちらが優先されます。"
            className="litob-base-control"
          >
            <div className="litob-editor-icon">
              {materialIcons.map((icon, i) => {
                return (
                  <div
                    key={i}
                    className={
                      icon.value === iconName
                        ? "litob-editor-icon-item current"
                        : "litob-editor-icon-item"
                    }
                    onClick={() => onClickIconButton(icon)}
                  >
                    {icon.value !== "" ? (
                      <span className={icon.className}>{icon.value}</span>
                    ) : (
                      <div className="litob-editor-icon-item-blank">なし</div>
                    )}
                  </div>
                );
              })}
            </div>
          </BaseControl>
          <BaseControl
            label="カラー"
            help="ラベルとマーカーのカラーを一括で変更します。子要素単体でカラーを設定した場合はそちらが優先されます。"
            className="litob-base-control"
          >
            <ColorPalette
              colors={stateColors}
              value={color}
              onChange={(value) => setAttributes({ color: value })}
            />
          </BaseControl>
        </PanelBody>
      </InspectorControls>

      <RichText
        className="wp-block-lito-gist-label"
        onChange={(value) => setAttributes({ label: value })}
        placeholder="ラベルを入力"
        value={label}
      />

      <div className="litob-inner-blocks">
        <InnerBlocks
          allowedBlocks={allowedBlocks}
          template={template}
          renderAppender={() => (
            <button type="button" className="litob-add-button" onClick={addInnerBlock}>
              <span className="material-symbols-outlined">add_box</span>
            </button>
          )}
        />
      </div>
    </div>
  );
}
