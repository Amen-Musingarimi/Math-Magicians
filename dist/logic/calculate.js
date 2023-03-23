"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculate;
var _operate = _interopRequireDefault(require("./operate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    };
  }
  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return _objectSpread(_objectSpread({}, obj), {}, {
          next: obj.next + buttonName
        });
      }
      return _objectSpread(_objectSpread({}, obj), {}, {
        next: buttonName
      });
    }
    // If there is no operation, update next and clear the value
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + buttonName,
        total: null
      };
    }
    return {
      next: buttonName,
      total: null
    };
  }
  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return _objectSpread({}, obj);
      }
      return _objectSpread(_objectSpread({}, obj), {}, {
        next: "".concat(obj.next, ".")
      });
    }
    if (obj.operation) {
      return _objectSpread(_objectSpread({}, obj), {}, {
        next: '0.'
      });
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return _objectSpread(_objectSpread({}, obj), {}, {
        next: "".concat(obj.total, ".")
      });
    }
    return _objectSpread(_objectSpread({}, obj), {}, {
      next: '0.'
    });
  }
  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: (0, _operate.default)(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }
  if (buttonName === '+/-') {
    if (obj.next) {
      return _objectSpread(_objectSpread({}, obj), {}, {
        next: (-1 * parseFloat(obj.next)).toString()
      });
    }
    if (obj.total) {
      return _objectSpread(_objectSpread({}, obj), {}, {
        total: (-1 * parseFloat(obj.total)).toString()
      });
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    return _objectSpread(_objectSpread({}, obj), {}, {
      operation: buttonName
    });
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return _objectSpread(_objectSpread({}, obj), {}, {
        operation: buttonName
      });
    }
    if (!obj.total) {
      return {
        total: 0,
        operation: buttonName
      };
    }
    return {
      total: (0, _operate.default)(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return {
      operation: buttonName
    };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName
  };
}