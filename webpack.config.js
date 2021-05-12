const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin     = require("copy-webpack-plugin");


module.exports = {

  mode: 'development',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
          // minimize: false // Para quitar los comentarios
        },
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /styles.css$/,
        use: [ MiniCssExtract.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  optimization: {},

  plugins: [
    new HtmlWebpack({
      title: 'Webpack App',
      filename: 'index.html', // Opcional - Lo pone automaticamente
      template: './src/index.html',
    }),
    new MiniCssExtract({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new CopyPlugin({ 
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    }),
  ]

}