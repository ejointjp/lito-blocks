import {
  InspectorControls,
  MediaUpload,
  PanelColorSettings,
  PlainText,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function edit({ attributes, setAttributes }) {
  const { avatarID, avatarAlt, avatarURL, avatarBorderColor, avatarName, comment } = attributes;

  // const modifierClassName = modifier === "" ? "talk" : "talk talk--" + modifier;
  const blockProps = useBlockProps();

  const renderAvatar = (obj) => {
    return (
      <Button className="image-button" onClick={obj.open} style={{ padding: 0 }}>
        <img src={avatarURL} alt={avatarAlt} className={`wp-image-${avatarID}`} />
      </Button>
    );
  };

  const figureStyles = {
    borderColor: avatarBorderColor || undefined,
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
    <>
      <InspectorControls>
        <PanelColorSettings
          title="スタイル設定"
          initialOpen={false}
          colorSettings={[
            {
              value: avatarBorderColor,
              onChange: (value) => setAttributes({ avatarBorderColor: value }),
              label: "アバターの枠線",
            },
          ]}
        />
      </InspectorControls>

      <div {...blockProps}>
        <div className="wp-block-lito-talk-inner">
          <div className="wp-block-lito-talk-avatar">
            <div className="wp-block-lito-talk-figure" style={figureStyles}>
              <MediaUpload
                onSelect={onSelectImage}
                type="image"
                value={avatarID}
                render={renderAvatar}
              />
            </div>
            <div className="wp-block-lito-talk-name">
              <PlainText
                value={avatarName}
                onChange={(value) => setAttributes({ avatarName: value })}
                placeholder="名前"
              />
            </div>
          </div>
          <RichText
            className="wp-block-lito-talk-comment"
            value={comment}
            onChange={(value) => setAttributes({ comment: value })}
            placeholder="会話を入力"
          />
        </div>
      </div>
    </>
  );
}
