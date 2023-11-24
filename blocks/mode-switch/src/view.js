import { render } from '@wordpress/element';
import ModeSwitch from './components/ModeSwitch';

const $button = document.getElementById('wp-block-lito-mode-switch');

if ($button) {
  render(<ModeSwitch />, $button);
}
