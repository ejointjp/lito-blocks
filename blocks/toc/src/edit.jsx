import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps();

  return <div {...blockProps}>目次</div>;
}
