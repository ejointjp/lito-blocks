import { useBlockProps } from '@wordpress/block-editor';
import Evaluation from './components/Evaluation';

export default function save({ attributes }) {
  return (
    <div {...useBlockProps.save()}>
      <Evaluation attributes={attributes} />
    </div>
  );
}
