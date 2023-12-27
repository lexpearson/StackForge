const path = require('path');
const loaders = require('./loader.js');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/scripts/modules/js/main.js',
  output: {
    path: path.resolve(__dirname, './src/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: loaders
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules']
  },
  plugins: []
};
