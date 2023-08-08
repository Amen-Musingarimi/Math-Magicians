"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
require("./SideBar.css");
var _fa = require("react-icons/fa");
var _sideBarSlice = require("../redux/sideBarSlice");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SideBar = function SideBar() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var isOpen = (0, _reactRedux.useSelector)(function (state) {
    return state.nav.isOpen;
  });
  var handleHideNav = function handleHideNav() {
    dispatch((0, _sideBarSlice.toggleNav)());
  };
  var navStyle = {
    zIndex: '95',
    position: 'fixed',
    left: '0',
    top: '0',
    display: 'grid',
    gridTemplateRows: '1fr 3.5fr 1fr',
    width: '36vw',
    height: '100vh',
    transform: isOpen ? 'none' : 'translateX(-37vw)',
    backgroundColor: 'white',
    borderRight: 'rgb(240, 240, 240) solid 1px',
    transition: 'all 1s'
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    style: navStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-box"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "logo"
  }, "MM")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "pages-link"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/",
    activeclassname: "active"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleHideNav();
    }
  }, "HOME"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/calculator",
    activeclassname: "active"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleHideNav();
    }
  }, "CALCULATOR"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/quotes",
    activeclassname: "active"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleHideNav();
    }
  }, "QUOTES")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "social-box"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaPinterestP, null), /*#__PURE__*/_react.default.createElement(_fa.FaTwitter, null), /*#__PURE__*/_react.default.createElement(_fa.FaFacebook, null)));
};
var _default = SideBar;
exports.default = _default;