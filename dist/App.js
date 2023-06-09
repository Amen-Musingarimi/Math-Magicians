"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _Calculator = _interopRequireDefault(require("./components/Calculator"));
var _QuoteApi = _interopRequireDefault(require("./components/QuoteApi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_QuoteApi.default, null), /*#__PURE__*/React.createElement(_Calculator.default, null), ";");
}
var _default = App;
exports.default = _default;