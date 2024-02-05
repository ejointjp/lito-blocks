import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

export default function edit() {
  return <p {...useBlockProps()}>{__('Exampl – hello from the editor!', 'svg-site-logo')}</p>;
}
