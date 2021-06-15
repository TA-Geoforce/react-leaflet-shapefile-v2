"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactLeaflet = require("react-leaflet");

var _leaflet = _interopRequireDefault(require("./leaflet.shpfile"));

var _excluded = ["data", "map", "layerContainer"];

var ShapeFile = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ShapeFile, _React$Component);

  function ShapeFile() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ShapeFile.prototype;

  _proto.componentWillMount = function componentWillMount() {
    _React$Component.prototype.componentWillMount.call(this);

    var _this$props = this.props,
        data = _this$props.data,
        _map = _this$props.map,
        _lc = _this$props.layerContainer,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    this.leafletElement = L.shapefile(data, props);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    //todo
    this.setStyleIfChanged(prevProps, this.props);
  };

  return ShapeFile;
}(_react.default.Component);

exports.default = ShapeFile;