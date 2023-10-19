import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps({ className: "editor-block-base" });

  return (
    <div {...blockProps}>
      <span className="editor-block-label">目次</span>
      <span className="editor-block-by">by su blocks</span>
    </div>
  );
}
