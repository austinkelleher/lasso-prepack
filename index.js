'use strict';

const prepack = require('prepack/lib/prepack-standalone');

module.exports = function (lasso, pluginConfig) {
  pluginConfig = pluginConfig || {};

  lasso.addTransform({
    contentType: 'js',
    name: module.id,
    stream: false,

    transform (code, lassoContext) {
      const serialized = prepack.prepack(code, pluginConfig);
      return serialized.code;
    }
  });
};
