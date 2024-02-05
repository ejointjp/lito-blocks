// overallRatingを計算する共有関数
export const calculateOverallRating = (items) => {
  const overallRating = items.reduce((acc, item) => acc + item.rating, 0) / (items.length || 1);
  return Math.round(overallRating * 100) / 100; // 小数点以下1桁で四捨五入
};
