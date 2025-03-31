import { useBlockProps } from '@wordpress/block-editor';

export default function edit() {
  return (
    <div {...useBlockProps({ className: 'menu-btn nav-btn' })}>
      <div className="menu-btn-bar"></div>
      <div className="menu-btn-bar"></div>
      <div className="menu-btn-bar"></div>
    </div>
  );
}
