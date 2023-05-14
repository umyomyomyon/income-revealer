export const reveal = (income: number, overworkHours: number) => income / (1 + 1.25/160 * overworkHours)

export const numToJpYen = (num: number) => {
  const man = Math.trunc(num);
  const yen = Math.trunc((num - Math.trunc(num)) * 10000);
  if (yen === 0) {
    return `${man}万円`
  }
  return `${man}万${yen}円`;
};
