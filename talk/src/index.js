import { registerBlockType } from "@wordpress/blocks";
import attributes from "./attributes";

import "./style.css";
import "./editor.css";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  attributes,
  edit: Edit,
  save,
});
