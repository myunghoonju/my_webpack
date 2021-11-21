var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js', // 변환대상 파일 진입점 경로
  output: { // 대상파일 변환 결과물 정보 위치 설정
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: { // loader속성 정의
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', // 자바문법(es6 <-> prev es6) 호환가능 지원도구.
        exclude: /node_modules/ // library 관련 파일들이기 때문에 제외.
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: { // 파일간 연관관계 해석방식 지정.
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //별칭지정.
    },
    extensions: ['*', '.js', '.vue', '.json'] //지정된 확장자 생략가능 (import a from /src/a)
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

/*

// webpack ver 3에서는 아래를 작성한다.

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


// webpack ver 4는 mode: 'production' 작성해주면 위에 과정이 생략된다.
module.exports = {
  mode: 'production',
  ...
}


 */