import { renderStars } from '../libs/renderStars';
import { calculateOverallRating } from '../libs/calculateOverallRating';

export default function Evaluation({ attributes }) {
  const { title, items } = attributes;
  const overallRating = calculateOverallRating(items);

  return (
    <div className="evaluation">
      <div className="evaluation-title">{title}</div>
      <div className="evaluation-items">
        {items.map((item, index) => (
          <div className="evaluation-item" key={index}>
            <div className="evaluation-item-name">{item.name}</div>
            <div className="evaluation-stars">{renderStars(item.rating)}</div>
            <div className="evaluation-rating">{item.rating.toFixed(1)}</div>
          </div>
        ))}
      </div>
      <div className="evaluation-overall">
        <div className="evaluation-overall-label">総合</div>
        <div className="evaluation-overall-stars evaluation-stars">
          {renderStars(overallRating)}
        </div>
        <div className="evaluation-overall-rating evaluation-rating">
          <strong>{overallRating.toFixed(1)}</strong>
        </div>
      </div>
    </div>
  );
}
