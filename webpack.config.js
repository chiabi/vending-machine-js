// 파일 및 디렉토리 경로 작업을 위한 경로 유틸리티
const path = require('path');
// 웹팩 모듈 불러오기

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
        use: [{
          // CSS를 DOM의 style태그에 출력한다
          loader: 'style-loader',
        }, {
          // 자바스크립트 안에 CSS를 해석한다. 의존성 해결
          loader: 'css-loader',
        }, {
          // Sass를 CSS로 컴파일 한다.
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      }
    ]
  },
  devtool: 'source-map',  
};