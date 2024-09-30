interface CNode {
  prev: CNode | null
  next: CNode | null
  value: number
  key: number
}

class LRUCache {
  readonly capacity: number
  readonly map: Map<number, CNode>
  head: CNode | null = null
  tail: CNode | null = null

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1
    }
    const node = this.map.get(key)!

    if (node != this.head) {
      if (node.prev) {
        node.prev.next = node.next
      }
      if (node.next) {
        node.next.prev = node.prev
      }
      if (node == this.tail) {
        this.tail = node.prev
      }

      node.next = this.head
      node.prev = null
      this.head!.prev = node
      this.head = node
    }

    return node.value
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!
      node.value = value
      if (node == this.head) return

      if (node.prev) {
        node.prev.next = node.next
      }
      if (node.next) {
        node.next.prev = node.prev
      }
      if (node == this.tail) {
        this.tail = node.prev
      }

      node.next = this.head
      node.prev = null
      this.head!.prev = node
      this.head = node
    } else {
      const newNode: CNode = {
        prev: null,
        next: this.head,
        value,
        key
      }
      if (this.head) {
        this.head.prev = newNode
      }
      this.head = newNode
      if (!this.tail) {
        this.tail = newNode
      }
      this.map.set(key, newNode)
    }

    // prune
    if (this.map.size > this.capacity) {
      this.map.delete(this.tail!.key)
      this.tail = this.tail!.prev
      this.tail!.next = null
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
