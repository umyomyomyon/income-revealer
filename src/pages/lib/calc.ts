export const reveal = (income: number, overworkHours: number) => income / (1 + 1.25/160 * overworkHours)
