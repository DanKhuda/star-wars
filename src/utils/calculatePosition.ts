export const calculatePosition = (
  index: number,
  total: number,
  yPosition: number
) => {
  const containerWidth = window.innerWidth;
  const nodeWidth = 150;
  const spacing = 20;
  const startX =
    (containerWidth - (total * nodeWidth + (total - 1) * spacing)) / 2;
  return {
    x: startX + index * (nodeWidth + spacing),
    y: yPosition,
  };
};
