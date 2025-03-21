class HashTableWithArray {
  constructor() {
    this.table = new Map();
  }

  hash(key) {
    return key[0].toLowerCase();
  }

  insert(word) {
    const index = this.hash(word);

    if (!this.table.has(index)) {
      this.table.set(index, []);
    }

    if (!this.table.get(index).includes(word)) {
      this.table.get(index).push(word);
    }
  }

  getWords(startingLetter) {
    console.log(
      `Words: ${this.table.get(startingLetter.toLowerCase()).length}` ||
        `Words:0`
    );

    return this.table.get(startingLetter.toLowerCase()) || [];
  }
}

class HashTableWithSet {
  constructor() {
    this.table = new Map();
  }

  hash(key) {
    return key[0].toLowerCase();
  }

  insert(word) {
    const index = this.hash(word);

    if (!this.table.has(index)) {
      this.table.set(index, new Set());
    }

    this.table.get(index).add(word);
  }

  getWords(startingLetter) {
    console.log(
      `Words: ${this.table.get(startingLetter.toLowerCase()).size}` || `Words:0`
    );
    return this.table.get(startingLetter.toLowerCase()) || new Set();
  }
}

const randomStrings = Array.from({ length: 100000 }, generateRandomString); // Добави в {length: колко на брой думи искаш да създадеш } - целта е тестване с различен размер на входни данни.

const dictionaryArray = new HashTableWithArray();
const dictionarySet = new HashTableWithSet();

randomStrings.forEach((word) => {
  dictionaryArray.insert(word);
  dictionarySet.insert(word);
});

// console.log("Using Array:", dictionaryArray.getWords("A"));
// console.log("Using Set:", [...dictionarySet.getWords("B")]);

function generateRandomString() {
  const firstChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let restOfString = "";
  for (let i = 0; i < 9; i++) {
    restOfString += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return firstChar + restOfString;
}

// console.log(`The length of this list is:${randomStrings.length}`);
