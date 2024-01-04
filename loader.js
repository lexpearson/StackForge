module.exports = [
  {
    test: /\.css$/,
    use: ['css-loader', 'mini-css-extract-plugin']
  },
  {
    test: /\.ts$/,
    use: ['ts-loader']
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: ['file-loader']
  }
];
