"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactLeaflet = require("react-leaflet");

var _leaflet = _interopRequireDefault(require("./leaflet.shpfile"));

var ShapeFile = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ShapeFile, _React$Component);

  function ShapeFile() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ShapeFile.prototype;

  _proto.componentWillMount = function componentWillMount() {
    this.leafletElement = L.shapefile(data);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    //todo
    this.setStyleIfChanged(prevProps, this.props);
  };

  return ShapeFile;
}(_react.default.Component);

exports.default = ShapeFile;