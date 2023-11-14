import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { question } = attributes;

  return (
    <div {...blockProps}>
      <div className="wp-block-humi-faq-q wp-block-humi-faq-row">
        <div className="wp-block-humi-faq-label">Q</div>
        <RichText
          className="wp-block-humi-faq-q-content"
          placeholder="質問を入力"
          value={question}
          allowedFormats={[]}
          onChange={(value) => setAttributes({ question: value })}
        />
      </div>
      <div className="wp-block-humi-faq-a wp-block-humi-faq-row">
        <div className="wp-block-humi-faq-label">A</div>
        <div className="humib-inner-blocks">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
}
