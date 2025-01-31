class HashMap {
  // Initialize hash map with load factor, capacity, and empty buckets.
  constructor(loadFactor = 0.75, capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from({ length: capacity }, () => []);
    this.storedkeys = 0;
  }

  // Double capacity and rearrange if load factor is exceeded.
  resize() {
    if (this.storedkeys >= this.capacity * this.loadFactor) {
      this.capacity *= 2;
      this.rearrange();
    }
  }

  // Hash function to compute bucket index for a key.
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  // Insert or update a key-value pair.
  set(key, value) {
    if (!key || !value) return 0;

    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find((element) => element[0] === key);

    if (!found) {
      bucket.push([key, value]);
      this.storedkeys += 1;
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i] = [key, value];
          break;
        }
      }
    }
    this.resize();
    return 1;
  }

  // Return all key value pairs.
  entries() {
    return this.buckets.flatMap((bucket) => {
      return bucket.map(([key, value]) => [key, value]);
    });
  }

  // Clear all key-value pairs.
  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.storedkeys = 0;
  }

  // Rehash all key-value pairs into new buckets.
  rearrange() {
    const oldBuckets = this.buckets;
    this.clear();
    oldBuckets.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        this.set(key, value);
      });
    });
  }
  /*searches array for key, returns true/false if found */
  has(key) {
    if (!key) return 0;

    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find((element) => element[0] === key);

    if (found) {
      return 1;
    } else {
      return 0;
    }
  }
  /*removes if key found*/
  remove(key) {
    if (!key) return 0;

    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find((element) => element[0] === key);

    if (found) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i] = [];
          this.storedkeys -= 1;
          return 1;
        }
      }
    } else {
      return 0;
    }
  }
  /*returns number of stored keys */
  length() {
    return this.storedkeys;
  }

  getbuckets() {
    return this.buckets;
  }
  /*returns all keys */
  keys() {
    return this.buckets.flatMap((bucket) => {
      return bucket.map(([key, value]) => key);
    });
  }

  /*returns all values */
  values() {
    return this.buckets.flatMap((bucket) => {
      return bucket.map(([key, value]) => value);
    });
  }
}

export { HashMap };
