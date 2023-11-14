import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { text, preText, postText } = attributes;

  return (
    <div {...blockProps}>
      {preText}
      {text}
      {postText}
    </div>
  );
}
