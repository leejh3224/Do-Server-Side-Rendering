"use strict";

module.exports = function (title) {
  return "<!DOCTYPE html>\n              <html lang=\"en\">\n              <head>\n                <meta charset=\"utf-8\">\n                <title> ".concat(title, " </title>\n              </head>\n              <body style=\"margin: 0px; padding: 0px;\">\n                <div id=\"app\"></div>\n                <script src=\"dist/bundle.js\"> </script>\n              </body>\n              </html>\n              ");
};