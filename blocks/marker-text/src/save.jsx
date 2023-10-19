import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { content, marker, markerColor, markerClassName } = attributes;
	const blockProps = useBlockProps.save({
		className: "marker-text",
		style: { "--su-marker-color": markerColor },
	});

	return (
		<p {...blockProps}>
			<span className={`${markerClassName} marker-text-icon`}>{marker}</span>
			<RichText.Content
				tagName="span"
				className="marker-text-content"
				value={content}
			/>
		</p>
	);
}
