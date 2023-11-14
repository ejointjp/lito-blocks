import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { iconName } = attributes;

  return (
    <div {...blockProps}>
      <div className="wp-block-lito-alert-inner">
        {iconName !== "" && (
          <span className="material-symbols-outlined litob-icon">{iconName}</span>
        )}
        <div className="litob-inner-blocks">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
