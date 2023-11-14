import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { question } = attributes;

  return (
    <div {...blockProps}>
      <div className="wp-block-humi-faq-q wp-block-humi-faq-row">
        <div className="wp-block-humi-faq-label">Q</div>
        <p className="wp-block-humi-faq-q-content">
          <RichText.Content value={question} />
        </p>
      </div>
      <div className="wp-block-humi-faq-a wp-block-humi-faq-row">
        <div className="wp-block-humi-faq-label">A</div>
        <div className="humib-inner-blocks">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
