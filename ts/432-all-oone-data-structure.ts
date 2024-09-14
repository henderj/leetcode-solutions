interface DNode {
  prev?: DNode
  next?: DNode
  count: number
  keys: Set<string>
}

class AllOne {
  readonly keyNodeMap = new Map<string, DNode>()
  min: DNode | undefined = undefined
  max: DNode | undefined = undefined

  constructor() {

  }

  // Increments the count of the string key by 1. 
  // If key does not exist in the data structure, insert it with count 1
  inc(key: string): void {
    const currentNode = this.keyNodeMap.get(key)

    if (currentNode == undefined) { // if key does not exist, insert it with count 1
      if (this.min == undefined || this.min.count != 1) {
        const newMin = {prev: undefined, next: this.min, count: 1, keys: new Set<string>()}
        this.min = newMin
        if (newMin.next != undefined) {
          newMin.next.prev = newMin
        }
        if (this.max == undefined) {
          this.max = newMin
        }
      }
      this.min.keys.add(key)
      this.keyNodeMap.set(key, this.min)
      return
    }

    currentNode.keys.delete(key)

    if (currentNode.next == undefined) {
      const newMax = {prev: currentNode, next: undefined, count: currentNode.count + 1, keys: new Set<string>()}
      this.max = newMax
      currentNode.next = newMax
    } else if (currentNode.count + 1 != currentNode.next.count) {
      const newNext = {prev: currentNode, next: currentNode.next, count: currentNode.count + 1, keys: new Set<string>()}
      currentNode.next = newNext
      newNext.next.prev = newNext
    }

    if (currentNode.keys.size == 0) {
      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev
      }
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next
      }
      if (currentNode == this.min) {
        this.min = currentNode.next
      }
      if (currentNode == this.max) {
        this.max = currentNode.prev
      }
    }

    const nextNode = currentNode.next
    nextNode.keys.add(key)
    this.keyNodeMap.set(key, nextNode)
  }

  // Decrements the count of the string key by 1.
  // If the count of key is 0 after the decrement,
  // remove it from the data structure.
  // It is guaranteed that key exists in the data structure before the decrement.
  dec(key: string): void {
    const currentNode = this.keyNodeMap.get(key)

    if (currentNode == undefined) {
      throw Error('must inc before dec')
    }

    currentNode.keys.delete(key)

    if (currentNode.prev == undefined && currentNode.count != 1) {
      const newMin = {prev: undefined, next: currentNode, count: currentNode.count - 1, keys: new Set<string>()}
      this.min = newMin
      currentNode.prev = newMin
    } else if (currentNode.prev != undefined && currentNode.count - 1 != currentNode.prev.count) {
      const newPrev = {prev: currentNode.prev, next: currentNode, count: currentNode.count - 1, keys: new Set<string>()}
      currentNode.prev = newPrev
      newPrev.prev.next = newPrev
    }

    if (currentNode.keys.size == 0) {
      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev
      }
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next
      }
      if (currentNode == this.min) {
        this.min = currentNode.next
      }
      if (currentNode == this.max) {
        this.max = currentNode.prev
      }
    }

    if (currentNode.count == 1) {
      this.keyNodeMap.delete(key)
      return
    }

    if (currentNode.prev == undefined) {
      throw Error('this should never happen')
    }

    currentNode.prev.keys.add(key)
    this.keyNodeMap.set(key, currentNode.prev)
  }

  // Returns one of the keys with the maximal count.
  // If no element exists, return an empty string ""
  getMaxKey(): string {
    return this.max?.keys.values().next().value ?? ''
  }

  // Returns one of the keys with the minimum count.
  // If no element exists, return an empty string "".
  getMinKey(): string {
    return this.min?.keys.values().next().value ?? ''
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
 
const allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
console.log(allOne.getMaxKey()); // return "hello"
console.log(allOne.getMinKey()); // return "hello"
allOne.inc("leet");
console.log(allOne.getMaxKey()); // return "hello"
console.log(allOne.getMinKey()); // return "leet"
