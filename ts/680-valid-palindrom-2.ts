function validPalindrome(s: string): boolean {
  return doValidation(s, true)
};

function doValidation(s: string, canDelete: boolean): boolean {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] != s[right]) {
      if (!canDelete) { // already used up our 1 char deletion
        return false
      }

      return doValidation(s.slice(left, right), false)
          || doValidation(s.slice(left + 1, right + 1), false)
    }

    left += 1
    right -= 1
  }
  return true
}

// aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga
// aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxj
// aguokepatgbnvfqmgmlucupuufxoohdfpgjdmysgvhmvffcnqxj
