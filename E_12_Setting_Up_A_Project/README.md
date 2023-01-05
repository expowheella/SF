1. В файле <b>webpack.config.js</b> полю <b>mode</b> установим значение <b>development</b>. Так мы обозначим, что эта конфигурация будет использована только в режиме разработки.

        module.exports = {
            mode: 'development',
            entry: './src/index.js',
        devServer: {
            static: './dist',
        },
            plugins: [
                new HtmlWebpackPlugin({
                title: 'Development',
            }),
            ],
            output: {
            filename: 'main.js',
            },
        };

2. <i>Webpack-dev-server предоставляет простой веб-сервер и возможность использовать мгновенную перезагрузку.</i>
        
        npm install --save-dev webpack-dev-server
