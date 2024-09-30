function pointEqual(a: number[], b: number[]): boolean {
  return a[0] == b[0] && a[1] == b[1]
}
function isBoomerang(points: number[][]): boolean {
  if (pointEqual(points[0], points[1]) || pointEqual(points[1], points[2]) || pointEqual(points[0], points[2])) {
    return false
  }
  const slope1 = (points[0][0] - points[1][0]) == 0 ? Number.POSITIVE_INFINITY : (points[0][1] - points[1][1]) / (points[0][0] - points[1][0])
  const slope2 = (points[0][0] - points[2][0]) == 0 ? Number.POSITIVE_INFINITY : (points[0][1] - points[2][1]) / (points[0][0] - points[2][0])

  return slope1 != slope2
};
