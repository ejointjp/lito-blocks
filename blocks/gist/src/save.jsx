import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { markerColor, label } = attributes;
	const blockProps = useBlockProps.save({
		className: "gist",
		style: { "--gist-color": markerColor },
	});

	return (
		<div {...blockProps}>
			{label && <div className="gist-label">{label}</div>}
			<div className="gist-list">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
