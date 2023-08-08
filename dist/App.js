"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _fi = require("react-icons/fi");
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./components/Home"));
var _QuoteApi = _interopRequireDefault(require("./components/QuoteApi"));
var _Calculator = _interopRequireDefault(require("./components/Calculator"));
var _SideBar = _interopRequireDefault(require("./components/SideBar"));
var _sideBarSlice = require("./redux/sideBarSlice");
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var App = function App() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/_react.default.createElement(_fi.FiMenu, {
    className: "menu-icon",
    onClick: function onClick() {
      return dispatch((0, _sideBarSlice.toggleNav)());
    }
  }), /*#__PURE__*/_react.default.createElement(_SideBar.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    index: true,
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/calculator",
    index: true,
    element: /*#__PURE__*/_react.default.createElement(_Calculator.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/quotes",
    index: true,
    element: /*#__PURE__*/_react.default.createElement(_QuoteApi.default, null)
  })));
};
var _default = App;
exports.default = _default;