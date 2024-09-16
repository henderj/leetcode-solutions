function findMinDifference(timePoints: string[]): number {
    const sorted = timePoints.sort()
    let minDiff = Number.POSITIVE_INFINITY
    for (let i = 1; i < sorted.length; i++) {
      const time1 = getTotalMinutes(sorted[i - 1])
      const time2 = getTotalMinutes(sorted[i])
      const diff = time2 - time1
      if (diff < minDiff) {
        minDiff = diff
      }
    }

    const timeN = getTotalMinutes(sorted[sorted.length - 1])
    const time0 = getTotalMinutes(sorted[0])
    const diff = (1440 - timeN) + time0
    if (diff < minDiff) {
      minDiff = diff
    }
    return minDiff
};

function getTotalMinutes(timePoint: string): number {
  const split = timePoint.split(':')
  const hours = parseInt(split[0])
  const minutes = parseInt(split[1])
  return hours * 60 + minutes
}

const timePoints = ["01:00","23:59","01:01"]
console.log(findMinDifference(timePoints))
