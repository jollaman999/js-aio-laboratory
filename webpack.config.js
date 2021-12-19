const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg/,
        type: 'asset/resource',
        generator: {
          filename: './image/[hash][ext][query]',
        },
      },
    ],
  },
};
