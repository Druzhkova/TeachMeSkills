export class Element {
  constructor(elem) {
    this.node = document.createElement(elem);
  }

  addClassName(className) {
    this.node.classList.add(className);
    return this;
  }

  onClick(callback) {
    this.node.addEventListener("click", callback);
    return this;
  }

  update(children = []) {
    this.node.innerHTML = "";
    children.forEach((child) => {
      this.node.append(child);
    });
  }

  render(children = []) {
    children.forEach((child) => {
      this.node.append(child);
    });
    return this.node;
  }
}
