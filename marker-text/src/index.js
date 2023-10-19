import { registerBlockType } from "@wordpress/blocks";

import "./style.css";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes: {
		content: {
			type: "string",
		},
		marker: {
			type: "string",
			default: "check",
		},
		markerColor: {
			type: "text",
		},
		markerClassName: {
			type: "string",
			default: "material-icons",
		},
	},

	edit: Edit,
	save,
});
