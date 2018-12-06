"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (res, title) {
  res.write("<html><head><title>".concat(title, "</title></head><body style=\"margin: 0;\">"));
  var sheet = new _styledComponents.ServerStyleSheet();
  var jsx = sheet.collectStyles(_react.default.createElement(_App.default, null));
  var stream = sheet.interleaveWithNodeStream((0, _server.renderToNodeStream)(jsx));
  stream.pipe(res, {
    end: false
  });
  stream.on('end', function () {
    return res.end('</body></html>');
  });
};