'use strict';

// Settings configured here will be merged into the final config object.
export default {
  module: {
    loaders: [
      {
        test: /\.eot/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
