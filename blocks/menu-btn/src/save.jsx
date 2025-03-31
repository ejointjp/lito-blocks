import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
  return (
    <div {...useBlockProps.save({ className: 'menu-btn nav-btn' })}>
      <div className="menu-btn-bar"></div>
      <div className="menu-btn-bar"></div>
      <div className="menu-btn-bar"></div>
    </div>
  );
}
