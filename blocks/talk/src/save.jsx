import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		avatarID,
		avatarAlt,
		avatarURL,
		avatarbordercolor,
		avatarName,
		comment,
		modifier,
	} = attributes;

	const modifierClassName = modifier === "" ? "talk" : "talk talk--" + modifier;

	const blockProps = useBlockProps.save({ className: modifierClassName });

	const figureStyles = {
		borderColor: avatarbordercolor || undefined,
	};

	return (
		<div {...blockProps}>
			<div className="talk-avatar">
				<div className="talk-figure" style={figureStyles}>
					<img
						src={avatarURL}
						alt={avatarAlt}
						className={`wp-image-${avatarID}`}
					/>
				</div>
				<div className="talk-name">{avatarName}</div>
			</div>
			<div className="talk-comment">
				<RichText.Content value={comment} />
			</div>
		</div>
	);
}
