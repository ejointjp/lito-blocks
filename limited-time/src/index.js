import { registerBlockType } from "@wordpress/blocks";
import "./style.css";
import "./editor.css";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes: {
		startDateTime: {
			type: "date",
			default: null,
		},
		endDateTime: {
			type: "date",
			default: null,
		},
	},

	edit: Edit,
	save,
});
