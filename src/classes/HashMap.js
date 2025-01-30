class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity);
    this.size = 0;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    if (
      key == null ||
      key == undefined ||
      key == "" ||
      value == null ||
      value == undefined ||
      value == ""
    ) {
      return;
    }
    const index = this.hash(key);

    if (this.buckets[index][0] === value) {
    }
  }
}

export { HashMap };
