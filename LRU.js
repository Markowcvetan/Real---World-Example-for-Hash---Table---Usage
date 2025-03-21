class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  display() {
    
    return Array.from(this.cache.entries());
  }
}

const cache = new LRUCache(3);

cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);

console.log(cache.display());
