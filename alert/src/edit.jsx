import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, BaseControl } from "@wordpress/components";

import icons from "../../helper/material-icons";
import { icon } from "../../helper/icon";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({ className: "alert" });
	const { iconName, iconClassName } = attributes;

	const onClickIconButton = (icon) => {
		setAttributes({
			iconName: icon.value,
			iconClassName: icon.className,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="アイコン" icon={icon} initialOpen={true}>
					<BaseControl label="アラートアイコンを選択" id="su-blocks/alert/icon">
						<div className="editor-icon">
							{icons.map((icon, i) => {
								const isCurrent =
									icon.value === iconName && icon.className === iconClassName;

								return (
									<div
										key={i}
										className={
											isCurrent
												? "editor-icon-item current"
												: "editor-icon-item"
										}
										onClick={() => onClickIconButton(icon)}
									>
										{icon.value !== "" ? (
											<span className={icon.className}>{icon.value}</span>
										) : (
											<div className="su-alert-icon__blank">なし</div>
										)}
									</div>
								);
							})}
						</div>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{iconName !== "" && (
					<span className={`${iconClassName} md-24 alert-icon`}>
						{iconName}
					</span>
				)}
				<InnerBlocks />
			</div>
		</>
	);
}
