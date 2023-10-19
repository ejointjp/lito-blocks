import { icon } from "../../helper/icon";
import {
  InspectorControls,
  MediaUpload,
  PanelColorSettings,
  PlainText,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody, SelectControl } from "@wordpress/components";
import "./editor.css";

export default function Edit({ attributes, setAttributes }) {
  const {
    avatarID,
    avatarAlt,
    avatarURL,
    avatarbordercolor,
    avatarName,
    comment,
    modifier,
  } = attributes;

  const modifierClassName = modifier === "" ? "talk" : "talk talk--" + modifier;

  const blockProps = useBlockProps({ className: modifierClassName });

  const renderAvatar = (obj) => {
    return (
      <Button
        className="image-button"
        onClick={obj.open}
        style={{ padding: 0 }}
      >
        <img
          src={avatarURL}
          alt={avatarAlt}
          className={`wp-image-${avatarID}`}
        />
      </Button>
    );
  };

  const figureStyles = {
    borderColor: avatarbordercolor || undefined,
  };

  const onChangeModifier = (value) =>
    setAttributes({
      modifier: value,
    });

  const onChangeAvatarBorderColor = (value) =>
    setAttributes({
      avatarbordercolor: value,
    });

  const onSelectImage = (media) => {
    const newAvatarURL = media.sizes.thumbnail
      ? media.sizes.thumbnail.url
      : media.url;

    setAttributes({
      avatarURL: newAvatarURL,
      avatarID: media.id,
      avatarAlt: media.alt,
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="ブロック設定" icon={icon}>
          <SelectControl
            label="吹き出しの向き"
            value={modifier}
            onChange={onChangeModifier}
            options={[
              {
                value: "",
                label: "デフォルト",
              },
              {
                value: "reverse",
                label: "反転",
              },
            ]}
          />
        </PanelBody>

        <PanelColorSettings
          title="スタイル設定"
          initialOpen={false}
          colorSettings={[
            {
              value: avatarbordercolor,
              onChange: onChangeAvatarBorderColor,
              label: "アバターの枠線",
            },
          ]}
        />
      </InspectorControls>

      <div {...blockProps}>
        <div className="talk-avatar">
          <div className="talk-figure" style={figureStyles}>
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              value={avatarID}
              render={renderAvatar}
            />
          </div>
          <div className="talk-name">
            <PlainText
              value={avatarName}
              onChange={(value) => setAttributes({ avatarName: value })}
              placeholder="名前"
            />
          </div>
        </div>
        <RichText
          className="talk-comment"
          multiline="p"
          value={comment}
          onChange={(value) => setAttributes({ comment: value })}
          placeholder="会話を入力"
        />
      </div>
    </>
  );
}
