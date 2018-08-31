// 파일 및 디렉토리 경로 작업을 위한 경로 유틸리티
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { 
        test: /\.ts(x)?$/, 
        use: { 
          loader: 'awesome-typescript-loader' 
        } 
      },{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // 자바스크립트 안에 CSS를 해석한다. 의존성 해결
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer'),
                ]
              }
            },
            {
              // Sass를 CSS로 컴파일 한다.
              loader: 'sass-loader',
              options: {
                outputStyle: 'compressed',
                sourceMap: true
              }
            }, 
          ]
        }), 
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
    })
  ]
};