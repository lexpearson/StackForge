const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, './src/assets/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  }
};
