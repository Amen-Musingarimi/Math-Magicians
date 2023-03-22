"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Calculator.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Calculator = function Calculator() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "calculator-grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "output"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "previous-operant"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "number"
  }, "14"), /*#__PURE__*/_react.default.createElement("span", {
    className: "math-symbol"
  }, "x")), /*#__PURE__*/_react.default.createElement("div", {
    className: "current-operant"
  }, "0")), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "AC"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "+/-"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "%"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange"
  }, "\xF7"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "7"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "8"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "9"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange multiply"
  }, "x"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "4"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "5"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "6"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange"
  }, "-"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "1"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "2"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "3"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange"
  }, "+"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "span-two gray"
  }, "0"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "gray"
  }, "."), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "orange"
  }, "="));
};
var _default = Calculator;
exports.default = _default;