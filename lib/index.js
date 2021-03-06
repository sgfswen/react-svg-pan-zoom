'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.POSITION_RIGHT = exports.POSITION_TOP = exports.POSITION_NONE = exports.TOOL_ZOOM_OUT = exports.TOOL_ZOOM_IN = exports.TOOL_PAN = exports.TOOL_NONE = exports.TOOL_AUTO = exports.reset = exports.setPointOnViewerCenter = exports.zoomOnViewerCenter = exports.fitToViewer = exports.fitSelection = exports.zoom = exports.pan = exports.Toolbar = exports.ReactSVGPanZoom = exports.Viewer = undefined;

var _viewer = require('./viewer');

var _viewer2 = _interopRequireDefault(_viewer);

var _toolbar = require('./ui-toolbar/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _common = require('./features/common');

var _pan = require('./features/pan');

var _zoom = require('./features/zoom');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewer = function Viewer() {
  var msg = "HEY! You are trying to use an older version of ReactSVGPanZoom. " + "Read here https://github.com/chrvadala/react-svg-pan-zoom/blob/master/docs/migrate-from-v1-to-v2.md";

  console.error(msg);
  return null;
};

exports.Viewer = Viewer;
exports.ReactSVGPanZoom = _viewer2.default;
exports.Toolbar = _toolbar2.default;
exports.pan = _pan.pan;
exports.zoom = _zoom.zoom;
exports.fitSelection = _zoom.fitSelection;
exports.fitToViewer = _zoom.fitToViewer;
exports.zoomOnViewerCenter = _zoom.zoomOnViewerCenter;
exports.setPointOnViewerCenter = _common.setPointOnViewerCenter;
exports.reset = _common.reset;
exports.TOOL_AUTO = _constants.TOOL_AUTO;
exports.TOOL_NONE = _constants.TOOL_NONE;
exports.TOOL_PAN = _constants.TOOL_PAN;
exports.TOOL_ZOOM_IN = _constants.TOOL_ZOOM_IN;
exports.TOOL_ZOOM_OUT = _constants.TOOL_ZOOM_OUT;
exports.POSITION_NONE = _constants.POSITION_NONE;
exports.POSITION_TOP = _constants.POSITION_TOP;
exports.POSITION_RIGHT = _constants.POSITION_RIGHT;
exports.POSITION_BOTTOM = _constants.POSITION_BOTTOM;
exports.POSITION_LEFT = _constants.POSITION_LEFT;