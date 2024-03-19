let instance: Counter;
let count = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance! = this;
  }

  getCount() {
    return count;
  }

  increment() {
    return ++count;
  }

  decrement() {
    return --count;
  }
}

export const counter = new Counter();
