function angleClock(hour: number, minutes: number): number {
  const hourAngle = 360 / 12
  const minuteAngle = 360 / 60
  let angle = Math.abs((hour + minutes / 60) * hourAngle - minutes * minuteAngle)
  if (angle > 180) {
    angle = 360 - angle
  }
  return angle
};
