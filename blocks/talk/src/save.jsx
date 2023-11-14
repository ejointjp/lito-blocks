import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { avatarID, avatarAlt, avatarURL, avatarBorderColor, avatarName, comment } = attributes;

  const blockProps = useBlockProps.save();

  const figureStyles = {
    borderColor: avatarBorderColor || undefined,
  };

  return (
    <div {...blockProps}>
      <div className="wp-block-lito-talk-inner">
        <div className="wp-block-lito-talk-avatar">
          <div className="wp-block-lito-talk-figure" style={figureStyles}>
            <img src={avatarURL} alt={avatarAlt} className={`wp-image-${avatarID}`} />
          </div>
          <div className="wp-block-lito-talk-name">{avatarName}</div>
        </div>
        <div className="wp-block-lito-talk-comment">
          <RichText.Content value={comment} />
        </div>
      </div>
    </div>
  );
}
