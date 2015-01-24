'use strict';

var path = require('path');
path.sep = '/';

module.exports = function(fp, stripTrailing) {
  fp = path.normalize(fp).replace(/\\+/g, '/');
  if (stripTrailing === true) {
    return fp.replace(/\/$/g, '');
  }
  return fp;
};