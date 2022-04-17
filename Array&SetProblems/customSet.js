class MySet {
  constructor(initialVal) {
    this.mySet = this.initialiser(initialVal)
  }

  has(value) {
    // console.log('my set', this.mySet)
    if (!this.mySet) return false
    for (let key of this.mySet) {
      if (key === value) return true
    }
    return false
  }

  add(value) {
    console.log('add', value, this.mySet);
    if (!this.mySet) this.mySet = []
    if (!this.has(value)) this.mySet = this.mySet.push(value)
  }

  initialiser(...initialVal) {
    initialVal = initialVal.flat()
    if (!this.mySet) this.mySet = []
    for (let key of initialVal) {
      this.add(key)
    }
  }

  delete(value) {
    if (!this.has(value) && (this.mySet && this.mySet.length)) this.mySet.filter(item => item !== value)
  }

  clear() {
    this.mySet = [];
  }

  size() {
    if (!this.mySet) return 0
    return this.mySet.length
  }
}

const myset = new MySet(['asdf', 'ds', 'asdf', 'dfs'])

console.log(myset.size());
console.log(myset.has('ds'));
console.log(myset.has('fs'));
console.log(myset.add('ds'));
console.log(myset.delete('ds'));
