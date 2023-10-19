import { icon } from "../../helper/icon";
import materialIcons from "../../helper/material-icons";
import { stateColors } from "../../helper/colors";

import { createBlock } from "@wordpress/blocks";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, BaseControl, ColorPalette } from "@wordpress/components";
import { select, dispatch } from "@wordpress/data";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { marker, markerColor, label } = attributes;
	const blockProps = useBlockProps({
		className: "gist",
		style: { "--gist-color": markerColor },
	});
	const allowedBlocks = ["humi-blocks/marker-text"];
	const template = [["humi-blocks/marker-text"]];

	const onClickIconButton = (icon) => {
		if (icon.value === "") {
			setAttributes({ marker: undefined });
		} else {
			setAttributes({
				marker: icon.value,
				markerClassName: icon.className,
			});
		}

		changeChildrenValue({
			marker: icon.value,
			markerClassName: icon.className,
		});
	};

	// innerBlock要素のattributesを変更
	const changeChildrenValue = (props) => {
		// innerBlocksの要素をすべて取得
		const children =
			select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
		children.forEach((child) => {
			dispatch("core/block-editor").updateBlockAttributes(
				child.clientId,
				props,
			);
		});
	};

	// innerBlockを追加する
	const addInnerBlock = () => {
		let children =
			select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
		const lastChild = children.pop();
		const { marker, markerColor, markerClassName } = lastChild.attributes;

		dispatch("core/block-editor").insertBlocks(
			createBlock("humi-blocks/marker-text"),
			9999,
			clientId,
		);

		children =
			select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;
		const newChild = children.pop();

		newChild.attributes.marker = marker;
		newChild.attributes.markerColor = markerColor;
		newChild.attributes.markerClassName = markerClassName;
	};

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<PanelBody
					title="マーカーとカラーの一括設定"
					icon={icon}
					initialOpen={true}
				>
					<BaseControl
						label="マーカー"
						help="マーカーを一括で変更します。子要素単体でマーカーを指定した場合はそちらが優先されます。"
						className="su-components-base-control"
					>
						<div className="editor-icon">
							{materialIcons.map((icon, i) => {
								return (
									<div
										key={i}
										className={
											icon.value === marker
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
						label="カラー"
						help="ラベルとマーカーのカラーを一括で変更します。子要素単体でカラーを設定した場合はそちらが優先されます。"
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

			<RichText
				className="gist-label"
				onChange={(value) => setAttributes({ label: value })}
				placeholder="ラベルを入力"
				value={label}
			/>

			<div className="gist-list">
				<InnerBlocks
					allowedBlocks={allowedBlocks}
					template={template}
					renderAppender={() => (
						<button
							type="button"
							className="su-add-button"
							onClick={addInnerBlock}
						>
							<span className="material-icons-outlined">add_box</span>
						</button>
					)}
				/>
			</div>
		</div>
	);
}
