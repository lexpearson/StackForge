module.exports = [
  {
    test: /\.css$/,
    use: ['css-loader', 'mini-css-extract-plugin']
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: ['file-loader']
  },
];
