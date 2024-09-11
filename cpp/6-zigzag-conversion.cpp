#include <iostream>
#include <string>
#include <vector>
#include <sstream>

class Solution {
public:
    std::string convert(std::string s, int numRows) {
      if (numRows == 1) {
        return s;
      }

      std::vector<char> rows[numRows];
      int direction = 1;
      int curRow = 0;
      for (char c : s) {
        rows[curRow].push_back(c);
        curRow += direction;

        if (curRow < 0) {
          curRow = 1;
          direction = 1;
        } else if (curRow == numRows) {
          curRow = numRows - 2;
          direction = -1;
        }
      }

      std::stringstream ss;

      for (std::vector<char> v : rows) {
        ss << std::string(v.begin(), v.end());
      }

      return ss.str();
    }
};

int main() {
  auto sol = new Solution();
  std::cout << "expected: PAHNAPLSIIGYIR" << std::endl;
  std::cout << "actual: " << sol->convert("PAYPALISHIRING", 3) << std::endl;
}
