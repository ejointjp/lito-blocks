import { registerBlockType } from "@wordpress/blocks";

import "./style.css";
import "./editor.css";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes: {
		marker: {
			type: "text",
			default: "check",
		},
		markerColor: {
			type: "text",
			default: "#0ea5e9",
		},
		markerClassName: {
			type: "string",
			default: "material-icons",
		},
		label: {
			type: "text",
			default: "ここがポイント",
		},
	},

	edit: Edit,
	save,
});
