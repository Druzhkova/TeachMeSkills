import { Counter } from "./modules";
import {
  wrapper,
  container,
  counterBlock,
  leftButton,
  rightButton,
  resetButton,
} from "./elements";

const counter = new Counter();

counter.onChange((value) => {
    counterBlock.update([value])
});

document.body.append(
  wrapper.render([
    counterBlock.render([counter.currentValue]),
    container.render([
      leftButton.onClick(() => counter.decrement()).render(["-"]),
      resetButton.onClick(() => counter.reset()).render(["c"]),
      rightButton.onClick(() => counter.increment()).render(["+"]),
    ]),
  ])
);
