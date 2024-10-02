class NumMatrix {
  readonly matrixSums: number[][] = []

  constructor(matrix: number[][]) {
    for (let row = 0; row < matrix.length; row++) {
      let rowRunning = 0
      this.matrixSums.push([])

      for (let col = 0; col < matrix[row].length; col++) {
        const num = matrix[row][col];
        rowRunning += num
        if (row == 0) {
          this.matrixSums[row].push(rowRunning)
        } else {
          this.matrixSums[row].push(rowRunning + this.matrixSums[row - 1][col])
        }
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = this.matrixSums[row2][col2]
    let subtractedUpLeft = false
    if (row1 > 0) {
      sum -= this.matrixSums[row1 - 1][col2]
      subtractedUpLeft = true
    }
    if (col1 > 0) {
      sum -= this.matrixSums[row2][col1 - 1]
      if (subtractedUpLeft) {
        sum += this.matrixSums[row1 - 1][col1 - 1]
      }
    }
    return sum
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
