class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from({ length: capacity }, () => []);
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
    if (!key || !value) {
      return 0;
    }

    /*gets index for new key/value */
    const index = this.hash(key);
    /*searches if key/value already exists */
    const found = this.buckets[index].find((element) => element[0] === key);

    if (!found) {
      this.buckets[index][this.buckets[index].length] = [key, value];
      this.size += 1;
      return 1;
    } else {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          this.buckets[index][i] = [key, value];
          return 1;
        }
      }
    }
  }

  getbuckets() {
    return this.buckets;
  }
}

export { HashMap };
