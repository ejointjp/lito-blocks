import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({ className: "alert" });
	const { iconName, iconClassName } = attributes;

	return (
		<div {...blockProps}>
			{iconName !== "" && (
				<span className={`${iconClassName} md-24 alert-icon`}>{iconName}</span>
			)}
			<InnerBlocks.Content />
		</div>
	);
}
