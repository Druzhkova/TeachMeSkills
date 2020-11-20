export class Counter {
  constructor() {
    this.currentValue = 0;
    this.listener = null;
  }

  increment() {
    this.currentValue += 1;
    this.trigger();
  }

  decrement() {
    this.currentValue -= 1;
    this.trigger();
  }

  reset() {
    this.currentValue -= 0;
    this.trigger();
  }

  onChange(fn) {
    this.listener = fn;
  }

  trigger() {
    if (this.listener) {
      this.listener(this.currentValue);
    }
  }
}
