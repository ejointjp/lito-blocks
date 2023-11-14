import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { question } = attributes;

  return (
    <div {...blockProps}>
      <div className="wp-block-lito-faq-q wp-block-lito-faq-row">
        <div className="wp-block-lito-faq-label">Q</div>
        <RichText
          className="wp-block-lito-faq-q-content"
          placeholder="質問を入力"
          value={question}
          allowedFormats={[]}
          onChange={(value) => setAttributes({ question: value })}
        />
      </div>
      <div className="wp-block-lito-faq-a wp-block-lito-faq-row">
        <div className="wp-block-lito-faq-label">A</div>
        <div className="litob-inner-blocks">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
}
