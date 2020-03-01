export function truncateNumber(num: number) {
  if (num < 1e3) {
    return num;
  }
  if (num >= 1e3) {
    return +(num / 1e3).toFixed(1) + 'K';
  }
  return '';
}
