import styles from "./styles";

import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes: {
		iconName: {
			type: "string",
			default: "info",
		},
		iconClassName: {
			type: "string",
			default: "material-icons",
		},
	},
	styles,

	edit: Edit,
	save,
});
