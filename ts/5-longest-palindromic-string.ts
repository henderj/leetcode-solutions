function longestPalindrome(s: string): string {
  let maxL = 0
  let maxR = 0

  for (let i = 1; i < s.length; i++) {
    function getPalindrome(i: number, even: boolean): number[] {
      let l = i - 1
      let r = even ? i : i + 1
      while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
      }

      l++;
      r--;

      return [l, r]
    }

    const [l, r] = getPalindrome(i, false)
    if (r - l > maxR - maxL) {
      maxR = r
      maxL = l
    }

    const [l2, r2] = getPalindrome(i, true)
    if (r2 - l2 > maxR - maxL) {
      maxR = r2
      maxL = l2
    }
  }

  return s.slice(maxL, maxR + 1)
};

console.log(longestPalindrome("aaaa"))
