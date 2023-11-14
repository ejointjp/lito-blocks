import { MediaUpload, PlainText, RichText, useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { avatarID, avatarAlt, avatarURL, name, title, description } = attributes;

  const blockProps = useBlockProps();

  const renderAvatar = (obj) => {
    return (
      <Button className="image-button" onClick={obj.open} style={{ padding: 0 }}>
        <img src={avatarURL} alt={avatarAlt} className={`wp-image-${avatarID}`} />
      </Button>
    );
  };

  const onSelectImage = (media) => {
    const newAvatarURL = media.sizes.thumbnail ? media.sizes.thumbnail.url : media.url;

    setAttributes({
      avatarURL: newAvatarURL,
      avatarID: media.id,
      avatarAlt: media.alt,
    });
  };

  return (
    <div {...blockProps}>
      <div className="wp-block-humi-profile-avatar">
        <MediaUpload onSelect={onSelectImage} type="image" value={avatarID} render={renderAvatar} />
      </div>

      <div className="wp-block-humi-profile-name">
        <PlainText
          value={name}
          onChange={(value) => setAttributes({ name: value })}
          placeholder="名前"
        />
      </div>
      <div className="wp-block-humi-profile-title">
        <PlainText
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          placeholder="肩書き"
        />
      </div>

      <RichText
        className="wp-block-humi-profile-description"
        value={description}
        onChange={(value) => setAttributes({ description: value })}
        placeholder="プロフィール文を入力"
      />
    </div>
  );
}
