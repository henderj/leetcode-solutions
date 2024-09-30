function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    const dists = [-1, -1]
    let firstCrit = -1
    let lastCrit = -1
    let prevCrit = -1

    let prev = head!
    head = head!.next
    let i = 1
    while (head) {
      if (!isCrit(prev, head)) {
        i++
        prev = head
        head = head.next
        continue
      }
      if (firstCrit == -1) {
        firstCrit = i
        lastCrit = i
        prevCrit = i

        i++
        prev = head
        head = head.next
        continue
      }

      if (dists[0] == -1 || (i - prevCrit) < dists[0]) {
        dists[0] = i - prevCrit
      }

      lastCrit = i
      prevCrit = i
      
      i++
      prev = head
      head = head.next
    }


    if (firstCrit != lastCrit) {
      dists[1] = lastCrit - firstCrit
    }
    
    return dists
};

function isCrit(prev: ListNode, curr: ListNode): boolean {
  return isLocalMin(prev, curr) || isLocalMax(prev, curr)
}

function isLocalMin(prev: ListNode, curr: ListNode): boolean {
  return prev != null && curr.next != null && curr.val < prev.val && curr.val < curr.next.val
}
function isLocalMax(prev: ListNode, curr: ListNode): boolean {
  return prev != null && curr.next != null && curr.val > prev.val && curr.val > curr.next.val
}
