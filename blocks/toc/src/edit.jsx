import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { hideIfOtherExists } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="設定">
          <ToggleControl
            label="他に目次ブロックが存在する場合は非表示"
            checked={hideIfOtherExists}
            onChange={(value) => setAttributes({ hideIfOtherExists: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        目次
        {hideIfOtherExists && <p>(他に目次ブロックが存在する場合は表示されません)</p>}
      </div>
    </>
  );
}

// import { useBlockProps } from '@wordpress/block-editor';

// export default function Edit() {

//   return <div {...useBlockProps()}>目次</div>;
// }
