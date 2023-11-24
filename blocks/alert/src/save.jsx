import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { iconName } = attributes;

  return (
    <div {...blockProps}>
      <div className="alert">
        {iconName !== '' && (
          <span className="material-symbols-outlined alert-icon">{iconName}</span>
        )}
        <div className="litob-inner-blocks">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
