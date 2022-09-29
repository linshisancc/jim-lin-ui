import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pt from 'prop-types';
import React from 'react';
import './style';
import { jsx as _jsx } from "react/jsx-runtime";
var prefixCls = 'common-alert';
var colors = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type,
      others = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: prefixCls,
    style: {
      background: colors[type]
    }
  }, others), {}, {
    children: children
  }));
};

Alert.propTypes = {
  type: pt.oneOf(['info', 'positive', 'negative', 'warning'])
};
export default Alert;