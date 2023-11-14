import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { iconName } = attributes;

  return (
    <div {...blockProps}>
      <div className="wp-block-humi-alert-inner">
        {iconName !== "" && (
          <span className="material-symbols-outlined humib-icon">{iconName}</span>
        )}
        <div className="humib-inner-blocks">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
