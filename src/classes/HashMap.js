class HashMap() {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity);
    this.size = 0;
  }
}
