"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLeaflet = require("react-leaflet");

function ShapeFile(data) {
  return /*#__PURE__*/_react.default.createElement(_reactLeaflet.GeoJSON, {
    data: data.data
  });
}

var _default = ShapeFile;
exports.default = _default;