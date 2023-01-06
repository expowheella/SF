const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development', // режим разработчика
    entry: {
        app: './src/index.js', 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // название файла будет взято из entry, т.е. будет app.js
        publicPath: './dist'
    },
    devServer: {
        static: { directory: path.join(__dirname) },
        client: { overlay: true },
        liveReload: true
    },
    stats: {
        children: false // скрыть информацию в логах консоли о дочерних элементах.
    },
    devtool: 'inline-source-map', // для отслеживание источника ошибок
}