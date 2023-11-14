import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { content, iconName, color } = attributes;
  const blockProps = useBlockProps.save({
    className: "marker-text",
    style: { "--humib-marker-text-color": color },
  });

  return (
    <p {...blockProps}>
      {iconName !== "" && <span className="material-symbols-outlined humib-icon">{iconName}</span>}
      <RichText.Content
        tagName="span"
        className="wp-block-humi-marker-text-content"
        value={content}
      />
    </p>
  );
}
