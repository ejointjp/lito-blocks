import ServerSideRender from '@wordpress/server-side-render';

import { useBlockProps } from '@wordpress/block-editor';

export default function edit({ attributes }) {
  return (
    <div {...useBlockProps()}>
      <ServerSideRender block="lito/post-date" attributes={attributes} />
    </div>
  );
}
