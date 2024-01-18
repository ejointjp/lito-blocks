import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import metadata from './block.json';
import Icon from './Icon';
import './style.css';
import './editor.css';

registerBlockType(metadata.name, {
  icon: Icon,
  edit,
});
