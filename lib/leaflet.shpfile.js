'use strict';

var shp = _interopRequireWildcard(require("shpjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cw = require('./catiline.js'); //var shp = require('shp.js');
//import * as cw from 'catiline';


/* global cw, shp */
L.Shapefile = L.GeoJSON.extend({
  options: {
    importUrl: 'shp.js'
  },
  initialize: function initialize(file, options) {
    L.Util.setOptions(this, options);

    if (typeof cw !== 'undefined') {
      /*eslint-disable no-new-func*/
      if (!options.isArrayBufer) {
        this.worker = cw(new Function('data', 'cb', 'importScripts("' + this.options.importUrl + '");shp(data).then(cb);'));
      } else {
        this.worker = cw(new Function('data', 'importScripts("' + this.options.importUrl + '");return shp.parseZip(data);'));
      }
      /*eslint-enable no-new-func*/

    }

    L.GeoJSON.prototype.initialize.call(this, {
      features: []
    }, options);
    this.addFileData(file);
  },
  addFileData: function addFileData(file) {
    var self = this;
    this.fire('data:loading');

    if (typeof file !== 'string' && !('byteLength' in file)) {
      var data = this.addData(file);
      this.fire('data:loaded');
      return data;
    }

    if (!this.worker) {
      shp(file).then(function (data) {
        self.addData(data);
        self.fire('data:loaded');
      });
      return this;
    }

    var promise;

    if (this.options.isArrayBufer) {
      promise = this.worker.data(file, [file]);
    } else {
      promise = this.worker.data(cw.makeUrl(file));
    }

    promise.then(function (data) {
      self.addData(data);
      self.fire('data:loaded');
      self.worker.close();
    });
    return this;
  }
});

L.shapefile = function (a, b, c) {
  return new L.Shapefile(a, b, c);
};