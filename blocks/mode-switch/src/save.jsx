import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
  const blockProps = useBlockProps.save({ id: 'wp-block-lito-mode-switch' });

  return <div {...blockProps}></div>;
}
