// 파일 및 디렉토리 경로 작업을 위한 경로 유틸리티
const path = require('path');
// 웹팩 모듈 불러오기

const babelLoader = {
  test: /\.js$/,
  include: [
    path.resolve(__dirname, 'src/js')
  ],
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env']
    }
  }
}

const sassLoader = {
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

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      babelLoader, 
      sassLoader
    ]
  },
  devtool: 'source-map',  
};