import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
  return <p {...useBlockProps.save()}>{'Svg Site Logo – hello from the saved content!'}</p>;
}
