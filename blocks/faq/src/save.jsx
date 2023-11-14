import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { question } = attributes;

  return (
    <div {...blockProps}>
      <div className="wp-block-lito-faq-q wp-block-lito-faq-row">
        <div className="wp-block-lito-faq-label">Q</div>
        <p className="wp-block-lito-faq-q-content">
          <RichText.Content value={question} />
        </p>
      </div>
      <div className="wp-block-lito-faq-a wp-block-lito-faq-row">
        <div className="wp-block-lito-faq-label">A</div>
        <div className="litob-inner-blocks">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
