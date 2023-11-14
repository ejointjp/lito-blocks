import { icon } from "../../../helpers/icon";

import ServerSideRender from "@wordpress/server-side-render";
import { PanelBody, BaseControl, TextControl, CheckboxControl } from "@wordpress/components";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

export default function edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({ className: "share-btn" });
  const { twitter, facebook, hatebu, pocket, twitterVia, twitterHashTags } = attributes;

  return (
    <div {...blockProps}>
      <InspectorControls key="setting">
        <PanelBody title="表示するシェアボタン" initialOpen={true} icon={icon}>
          <BaseControl className="litob-base-control">
            <CheckboxControl
              label="X (Twitter)"
              checked={twitter}
              onChange={(value) => setAttributes({ twitter: value })}
            />

            <CheckboxControl
              label="Facebook"
              checked={facebook}
              onChange={(value) => setAttributes({ facebook: value })}
            />

            <CheckboxControl
              label="はてなブックマーク"
              checked={hatebu}
              onChange={(value) => setAttributes({ hatebu: value })}
            />

            <CheckboxControl
              label="Pocket"
              checked={pocket}
              onChange={(value) => setAttributes({ pocket: value })}
            />

            <TextControl
              label="Twitter via (@は不要）"
              value={twitterVia}
              onChange={(value) => setAttributes({ twitterVia: value })}
              helper="helper"
            />

            <TextControl
              label="Twitter ハッシュタグ（カンマ区切り、カンマの後の空白"
              value={twitterHashTags}
              onChange={(value) => setAttributes({ twitterHashTags: value })}
            />
          </BaseControl>
        </PanelBody>
      </InspectorControls>

      <ServerSideRender block="lito/share-btn" attributes={attributes} />
    </div>
  );
}
