const positiveColor = '#ffc107';
const negativeColor = 'var(--lito-light-gray)';

const BaseStar = ({ fill, children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    {children}
    <path
      d="M12 .587l3.668 7.425 8.332 1.209-6.001 5.851 1.416 8.265-7.415-3.898-7.415 3.898 1.416-8.265-6.001-5.851 8.332-1.209z"
      fill={fill}
    />
  </svg>
);

const FullStar = () => <BaseStar fill={positiveColor} />;
const EmptyStar = () => <BaseStar fill={negativeColor} />;
const PartialStar = ({ fillPercentage }) => {
  const gradientId = `gradient-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <BaseStar fill={`url(#${gradientId})`}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${fillPercentage * 100}%`} stopColor={positiveColor} />
          <stop offset={`${fillPercentage * 100}%`} stopColor={negativeColor} />
        </linearGradient>
      </defs>
    </BaseStar>
  );
};

const renderStar = (rating, index) => {
  const fullStarsCount = Math.floor(rating); // 完全に塗りつぶされた星の数
  const hasPartialStar = rating % 1 > 0; // 小数部分があるかどうか
  const partialStarIndex = Math.floor(rating); // 小数星がある場合のインデックス

  if (index < fullStarsCount) {
    // 完全に塗りつぶされた星を表示
    return <FullStar key={index} />;
  } else if (hasPartialStar && index === partialStarIndex) {
    // 小数点の部分だけPartialStarを表示
    const partialFill = rating - fullStarsCount;
    return <PartialStar key={index} fillPercentage={partialFill} />;
  } else {
    // 塗りつぶされていない星を表示
    return <EmptyStar key={index} />;
  }
};

export const renderStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(renderStar(rating, i));
  }
  return <>{stars}</>;
};
