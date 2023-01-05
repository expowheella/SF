// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './src/index.js',
//     devServer: {
//         static: './dist',
//     },
//     plugins: [
//         new HtmlWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             title: 'Development',
//             filename: 'src/index.html'
//         }),
//     ],
//     output: {
//         // path: path.resolve(__dirname, './dist'),
//         path: __dirname + '/dist',
//         filename: "main.js"
//     }
// }


const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: './dist'
    },
    devServer: {
        // static: '/dist',
        // overlay: true,
        liveReload: true
    },
    // plugins: [
    //     new HtmlWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'Development',
    //         filename: 'src/app.html'
    //     }),
    // ]
}