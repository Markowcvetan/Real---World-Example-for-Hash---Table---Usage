# Comparison: Array vs Set

This document provides a detailed comparison of **Array** and **Set** in terms of their features, performance, and use cases.

## Table of Contents

- [Comparison: Array vs Set](#comparison-array-vs-set)
  - [Table of Contents](#table-of-contents)
  - [Comparison Table](#comparison-table)
  - [Why Prefer Set Over Array?](#why-prefer-set-over-array)
    - [1. **Faster Insertion (O(1) vs O(n))**](#1-faster-insertion-o1-vs-on)
    - [2. **Better Performance in Large Datasets**](#2-better-performance-in-large-datasets)
    - [3. **Avoids Duplicate Words Automatically**](#3-avoids-duplicate-words-automatically)
  - [When to Use an Array Instead?](#when-to-use-an-array-instead)
    - [1. **If Order Matters**](#1-if-order-matters)
    - [2. **If You Need Indexed Access**](#2-if-you-need-indexed-access)
  - [Conclusion](#conclusion)

## Comparison Table

| Feature                        | Array                                           | Set                                              |
| ------------------------------ | ----------------------------------------------- | ------------------------------------------------ |
| **Insertion Time Complexity**  | O(n) (checks for duplicates using `includes()`) | O(1) (direct insertion)                          |
| **Search Time Complexity**     | O(n) (linear search for duplicates)             | O(1) (direct lookup)                             |
| **Storage Efficiency**         | Takes more space if duplicates exist            | Compact, stores unique elements                  |
| **Retrieval Speed**            | O(1) (direct lookup by index)                   | O(1) (direct lookup by key)                      |
| **Maintains Insertion Order?** | ✅ Yes                                          | ❌ No (Set doesn’t guarantee order in all cases) |
| **Duplicate Handling**         | ❌ Needs manual check (`includes()`)            | ✅ Automatically prevents duplicates             |

## Why Prefer Set Over Array?

### 1. **Faster Insertion (O(1) vs O(n))**

- `Set.add(word)` operates in constant time O(1).
- `Array.push(word)` requires a duplicate check, which takes O(n) time.
- **Example**: If we have millions of words, **Set** is much faster.

### 2. **Better Performance in Large Datasets**

- **Set** provides **instant lookups** (O(1)), compared to **linear search** (O(n)) in an **Array**.
- As the dataset grows, **Array** slows down significantly.

### 3. **Avoids Duplicate Words Automatically**

- **Array** requires checking with `includes()` before adding an item (O(n) time complexity).
- **Set** inherently prevents duplicates in O(1) time, so no additional check is needed.

## When to Use an Array Instead?

### 1. **If Order Matters**

- **Array** preserves insertion order.
- **Set** does not guarantee insertion order in all cases, so it’s not suitable when order is crucial.

### 2. **If You Need Indexed Access**

- If you want to access elements by index (e.g., `dictionary[0]`), **Array** is better.
- **Set** does not provide indexed access, as it only stores unique values.

---

## Conclusion

- Use **Set** when you need fast insertion, quick lookups, and automatic duplicate prevention, especially with large datasets.
- Use **Array** when maintaining order or indexed access is important.
