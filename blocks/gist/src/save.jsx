import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { color, label } = attributes;
  const blockProps = useBlockProps.save({
    style: { '--lito-gist-color': color },
  });

  return (
    <div {...blockProps}>
      {label && <div className="wp-block-lito-gist-label">{label}</div>}
      <div className="litob-inner-blocks">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
