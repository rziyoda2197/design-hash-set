class HashSet {
  constructor() {
    this.size = 16;
    this.buckets = new Array(this.size).fill(null);
  }

  _hash(key) {
    return key.toString().split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0) % this.size;
  }

  add(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [key];
    } else {
      this.buckets[index].push(key);
    }
  }

  remove(key) {
    const index = this._hash(key);
    if (this.buckets[index]) {
      const bucket = this.buckets[index];
      const indexInBucket = bucket.indexOf(key);
      if (indexInBucket !== -1) {
        bucket.splice(indexInBucket, 1);
        if (bucket.length === 0) {
          this.buckets[index] = null;
        }
      }
    }
  }

  has(key) {
    const index = this._hash(key);
    return this.buckets[index] && this.buckets[index].includes(key);
  }
}
