import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { color, label } = attributes;
  const blockProps = useBlockProps.save({
    style: { "--humib-gist-color": color },
  });

  return (
    <div {...blockProps}>
      {label && <div className="wp-block-humi-gist-label">{label}</div>}
      <div className="humib-inner-blocks">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
