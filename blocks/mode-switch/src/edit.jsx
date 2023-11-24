import { useBlockProps } from '@wordpress/block-editor';

export default function edit() {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <span className="material-symbols-outlined">light_mode</span>
    </div>
  );
}
