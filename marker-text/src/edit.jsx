import materialIcons from "../../helper/material-icons";
import { stateColors } from "../../helper/colors";
import { icon } from "../../helper/icon";
import {
	InspectorControls,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, BaseControl, ColorPalette } from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content, marker, markerColor, markerClassName } = attributes;
	const blockProps = useBlockProps({
		className: "marker-text",
		style: { "--su-marker-color": markerColor },
	});

	const onClickIconButton = (icon) => {
		if (icon.value === "") {
			setAttributes({ marker: undefined });
		} else {
			setAttributes({
				marker: icon.value,
				markerClassName: icon.className,
			});
		}
	};

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<PanelBody title="マーカーの設定" initialOpen={true} icon={icon}>
					<BaseControl label="マーカー" className="su-components-base-control">
						<div className="editor-icon">
							{materialIcons.map((icon, i) => {
								return (
									<div
										key={i}
										className={
											icon.value === marker &&
											icon.className === markerClassName
												? "editor-icon-item current"
												: "editor-icon-item"
										}
										onClick={() => onClickIconButton(icon)}
									>
										{icon.value !== "" ? (
											<span className={icon.className}>{icon.value}</span>
										) : (
											<div className="editor-icon-item-blank">なし</div>
										)}
									</div>
								);
							})}
						</div>
					</BaseControl>
					<BaseControl
						label="マーカーの色"
						className="su-components-base-control"
					>
						<ColorPalette
							colors={stateColors}
							value={markerColor}
							onChange={(value) => setAttributes({ markerColor: value })}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<span className={`${markerClassName} marker-text-icon`}>{marker}</span>
			<RichText
				tagName="span"
				className="marker-text-content"
				value={content}
				onChange={(content) => setAttributes({ content })}
				placeholder={"テキストを入力"}
			/>
		</div>
	);
}
