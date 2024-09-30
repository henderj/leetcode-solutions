function decodeMessage(key: string, message: string): string {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let currLetter = 0
  const cipher = new Map<string, string>();
  for (const c of key) {
    if (cipher.size >= letters.length) {
      break;
    }
    if (c === ' ') {
      continue
    }
    if (!cipher.has(c)) {
      cipher.set(c, letters[currLetter])
      currLetter++
    }
  }

  const decoded: string[] = []
  for (const c of message) {
    decoded.push(c === ' ' ? ' ' : cipher.get(c)!)
  }

  return decoded.join('')
};
