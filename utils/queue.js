class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
  }

  delete() {
    return this.data.shift();
  }

  isEmpty() {
    return this.data.length === 0
  }
}