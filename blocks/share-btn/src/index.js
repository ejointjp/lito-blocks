import { registerBlockType } from "@wordpress/blocks";
import attributes from "./attributes";

import "./style.css";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  attributes,
  edit: Edit,
  save: () => null,
});
