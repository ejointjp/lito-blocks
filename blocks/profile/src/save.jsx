import { RichText, useBlockProps } from "@wordpress/block-editor";
export default function save({ attributes }) {
  const { avatarID, avatarAlt, avatarURL, name, title, description } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="wp-block-humi-profile-avatar">
        <img src={avatarURL} alt={avatarAlt} className={`wp-image-${avatarID}`} />
      </div>

      <div className="wp-block-humi-profile-name">{name}</div>
      <div className="wp-block-humi-profile-title">{title}</div>

      <div className="wp-block-humi-profile-description">
        <RichText.Content value={description} />
      </div>
    </div>
  );
}
