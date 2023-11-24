import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { content, iconName, color } = attributes;
  const blockProps = useBlockProps.save({
    className: 'marker-text',
    style: { '--lito-marker-text-color': color },
  });

  return (
    <p {...blockProps}>
      {iconName !== '' && <span className="material-symbols-outlined litob-icon">{iconName}</span>}
      <RichText.Content
        tagName="span"
        className="wp-block-lito-marker-text-content"
        value={content}
      />
    </p>
  );
}
