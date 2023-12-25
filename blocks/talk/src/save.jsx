import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { avatarID, avatarAlt, avatarURL, avatarBorderColor, avatarName, comment } = attributes;

  const blockProps = useBlockProps.save({ className: 'talk' });

  const figureStyles = {
    borderColor: avatarBorderColor || undefined,
  };

  return (
    <div {...blockProps}>
      <div className="talk-inner">
        <div className="talk-avatar">
          <div className="talk-figure" style={figureStyles}>
            <img src={avatarURL} alt={avatarAlt} className={`wp-image-${avatarID}`} />
          </div>
          <div className="talk-name">{avatarName}</div>
        </div>
        <div className="talk-comment">
          <RichText.Content value={comment} />
        </div>
      </div>
    </div>
  );
}
