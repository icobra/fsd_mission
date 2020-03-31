// Конфигурационный файл в стиле https://webpack.js.org/configuration/ .
// Позволяет node.js обрабатывать пути на разных платформах одинаково.
const path = require('path');
// Для работы с html файлами и шаблонами, также понадобится для работы с pug.
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

// Экспорт модуля в node.js
module.exports = {
  // Точка входа в приложение.
  entry: PATHS.source + 'app.js',
  output: {
    filename: 'bundle.js',
    path: path.build
  },

  // plugins - плагины для кастомизации процесса сборки Webpack.
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      template: './src/index.pug'
    }),
  ]

  // ??? .
  module: {
    rules: [
    {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: true
      },
    }]
  }
}