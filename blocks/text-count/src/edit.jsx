import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  CheckboxControl,
  PanelBody,
  RangeControl,
  RadioControl,
  TextControl,
} from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";

export default function edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { wordsPerMinute, showType, showAsApproximate, preText, postText } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="表示設定" initialOpen={true} className="unko">
          <RangeControl
            help=""
            label="1分あたりに読む文字数"
            onChange={(value) => {
              setAttributes({ wordsPerMinute: value });
            }}
            value={wordsPerMinute}
            min={100}
            max={1000}
            step={50}
          />

          <RadioControl
            label="表示タイプ"
            help=""
            onChange={(value) => {
              setAttributes({ showType: value });
              if (value === "readingTime") {
                setAttributes({ preText: "約", postText: "分で読めます" });
              } else {
                setAttributes({ preText: "", postText: "文字" });
              }
            }}
            options={[
              {
                label: "文字数",
                value: "textCount",
              },
              {
                label: "読了時間（分）",
                value: "readingTime",
              },
            ]}
            selected={showType}
          />

          {showType !== "readingTime" && (
            <CheckboxControl
              label="文字数を丸める（50単位）"
              help="例 1231 -> 1250"
              onChange={(value) => {
                setAttributes({
                  showAsApproximate: value,
                  text: value,
                });
              }}
              checked={showAsApproximate}
            />
          )}

          <TextControl
            label="接頭辞"
            placeholder="約"
            value={preText}
            onChange={(value) => setAttributes({ preText: value })}
          />

          <TextControl
            label="接尾辞"
            placeholder={showType === "readingTime" ? "分で読めます" : "文字"}
            value={postText}
            onChange={(value) => setAttributes({ postText: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {/* <span className="wp-block-lito-text-count-pre-text">{preText}</span>
        <span className="wp-block-lito-text-count-text">文字数</span>
        <span className="wp-block-lito-text-count-post-text">{postText}</span> */}
        <ServerSideRender block="lito/text-count" attributes={attributes} />
      </div>
    </>
  );
}
