#include <iostream>
#include <string>
#include <unordered_map>

/*
 * start at beginning
 * check if current char is in hashmap
 * if so
 * 	restart at location of duplicate (stored in hashmap)
 * 	reset length
 * if not
 * 	increase length
 * 	store character in hashmap (key: character, value: index)
 * once we're at end of string, return
 */

class Solution {
public:
    int lengthOfLongestSubstring(std::string s) {
      std::unordered_map<char, int> m;
      int maxLength = 0;
      int currentLength = 0;

      for (int x = 0; x < s.length(); ++x) {
        char c = s.at(x);
        if (m.find(c) != m.end()) {
          x = m.at(c);
          m.clear();
          currentLength = 0;
        } else {
          m[c] = x;
          currentLength++;
          if (currentLength > maxLength) {
            maxLength = currentLength;
          }
        }
      }

      return maxLength;
    }
};

int main() {
  auto sol = new Solution();
  std::cout << "expected: 2" << std::endl;
  std::cout << "actual: " << sol->lengthOfLongestSubstring("aab") << std::endl;
}
