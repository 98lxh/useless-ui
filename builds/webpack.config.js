const { VueLoaderPlugin } = require("vue-loader");
const path = require('path')
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../packages/useless-ui/index.ts'), // 打包入口
  output: {
    path: path.resolve(__dirname, '../dist/lib'), // 出口
    filename: 'index.js',
    libraryTarget: 'umd', //打包格式 commonJs AMD 不支持es6 可以在浏览器直接使用
    library: 'useless-ui'
  },
  externals: {
    vue: { //忽略组件引用的vue变量
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'] // 解析文件顺序
  },
  module: {
    rules: [{ // 识别vue
      test: /\.vue$/,
      use: 'vue-loader',
    },
    { // 识别tsx
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
