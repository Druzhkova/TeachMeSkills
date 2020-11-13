(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = void 0;

var _modules = require("../modules");

var container = new _modules.Element("div").addClassName("buttons-panel");
exports.container = container;

},{"../modules":11}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counterBlock = void 0;

var _modules = require("../modules");

var counterBlock = new _modules.Element("div").addClassName("counter").addClassName("center");
exports.counterBlock = counterBlock;

},{"../modules":11}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "container", {
  enumerable: true,
  get: function get() {
    return _container.container;
  }
});
Object.defineProperty(exports, "counterBlock", {
  enumerable: true,
  get: function get() {
    return _counterBlock.counterBlock;
  }
});
Object.defineProperty(exports, "leftButton", {
  enumerable: true,
  get: function get() {
    return _leftButton.leftButton;
  }
});
Object.defineProperty(exports, "resetButton", {
  enumerable: true,
  get: function get() {
    return _resetButton.resetButton;
  }
});
Object.defineProperty(exports, "rightButton", {
  enumerable: true,
  get: function get() {
    return _rightButton.rightButton;
  }
});
Object.defineProperty(exports, "wrapper", {
  enumerable: true,
  get: function get() {
    return _wrapper.wrapper;
  }
});

var _container = require("./container");

var _counterBlock = require("./counterBlock");

var _leftButton = require("./leftButton");

var _resetButton = require("./resetButton");

var _rightButton = require("./rightButton");

var _wrapper = require("./wrapper");

},{"./container":1,"./counterBlock":2,"./leftButton":4,"./resetButton":5,"./rightButton":6,"./wrapper":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftButton = void 0;

var _modules = require("../modules");

var leftButton = new _modules.Element("div").addClassName("button").addClassName("center").addClassName("decrement");
exports.leftButton = leftButton;

},{"../modules":11}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetButton = void 0;

var _modules = require("../modules");

var resetButton = new _modules.Element("div").addClassName("button").addClassName("center").addClassName("reset");
exports.resetButton = resetButton;

},{"../modules":11}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightButton = void 0;

var _modules = require("../modules");

var rightButton = new _modules.Element("div").addClassName("button").addClassName("center").addClassName("increment");
exports.rightButton = rightButton;

},{"../modules":11}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = void 0;

var _modules = require("../modules");

var wrapper = new _modules.Element("div").addClassName("container");
exports.wrapper = wrapper;

},{"../modules":11}],8:[function(require,module,exports){
"use strict";

var _modules = require("./modules");

var _elements = require("./elements");

var counter = new _modules.Counter();
counter.onChange(function (value) {
  _elements.counterBlock.update([value]);
});
document.body.append(_elements.wrapper.render([_elements.counterBlock.render([counter.currentValue]), _elements.container.render([_elements.leftButton.onClick(function () {
  return counter.decrement();
}).render(["-"]), _elements.resetButton.onClick(function () {
  return counter.reset();
}).render(["c"]), _elements.rightButton.onClick(function () {
  return counter.increment();
}).render(["+"])])]));

},{"./elements":3,"./modules":11}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counter = /*#__PURE__*/function () {
  function Counter() {
    _classCallCheck(this, Counter);

    this.currentValue = 0;
    this.listener = null;
  }

  _createClass(Counter, [{
    key: "increment",
    value: function increment() {
      this.currentValue += 1;
      this.trigger();
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.currentValue -= 1;
      this.trigger();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.currentValue -= 0;
      this.trigger();
    }
  }, {
    key: "onChange",
    value: function onChange(fn) {
      this.listener = fn;
    }
  }, {
    key: "trigger",
    value: function trigger() {
      if (this.listener) {
        this.listener(this.currentValue);
      }
    }
  }]);

  return Counter;
}();

exports.Counter = Counter;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Element = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element(elem) {
    _classCallCheck(this, Element);

    this.node = document.createElement(elem);
  }

  _createClass(Element, [{
    key: "addClassName",
    value: function addClassName(className) {
      this.node.classList.add(className);
      return this;
    }
  }, {
    key: "onClick",
    value: function onClick(callback) {
      this.node.addEventListener("click", callback);
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.node.innerHTML = "";
      children.forEach(function (child) {
        _this.node.append(child);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      children.forEach(function (child) {
        _this2.node.append(child);
      });
      return this.node;
    }
  }]);

  return Element;
}();

exports.Element = Element;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Counter", {
  enumerable: true,
  get: function get() {
    return _Counter.Counter;
  }
});
Object.defineProperty(exports, "Element", {
  enumerable: true,
  get: function get() {
    return _Element.Element;
  }
});

var _Counter = require("./Counter");

var _Element = require("./Element");

},{"./Counter":9,"./Element":10}]},{},[8]);
