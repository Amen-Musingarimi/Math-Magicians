"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _calculate = _interopRequireDefault(require("../logic/calculate"));
require("./Calculator.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Calculator = function Calculator() {
  var _useState = (0, _react.useState)({
      total: null,
      next: null,
      operation: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var clickHandler = function clickHandler(buttonName) {
    var result = (0, _calculate.default)(state, buttonName);
    setState(result);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "calculator-grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "output"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "previous-operant"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "number"
  }, state.total), /*#__PURE__*/_react.default.createElement("span", {
    className: "math-symbol"
  }, state.operation)), /*#__PURE__*/_react.default.createElement("div", {
    className: "current-operant"
  }, state.next || '0')), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('AC');
    }
  }, "AC"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('+/-');
    }
  }, "+/-"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('%');
    }
  }, "%"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange",
    onClick: function onClick() {
      return clickHandler('÷');
    }
  }, "\xF7"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('7');
    }
  }, "7"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('8');
    }
  }, "8"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('9');
    }
  }, "9"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange multiply",
    onClick: function onClick() {
      return clickHandler('x');
    }
  }, "x"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('4');
    }
  }, "4"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('5');
    }
  }, "5"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('6');
    }
  }, "6"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange",
    onClick: function onClick() {
      return clickHandler('-');
    }
  }, "-"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('1');
    }
  }, "1"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('2');
    }
  }, "2"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('3');
    }
  }, "3"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange",
    onClick: function onClick() {
      return clickHandler('+');
    }
  }, "+"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "span-two gray",
    onClick: function onClick() {
      return clickHandler('0');
    }
  }, "0"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray",
    onClick: function onClick() {
      return clickHandler('.');
    }
  }, "."), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange",
    onClick: function onClick() {
      return clickHandler('=');
    }
  }, "="));
};
var _default = Calculator;
exports.default = _default;