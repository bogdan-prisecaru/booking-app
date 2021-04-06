// const path = require('path');

module.exports = function() {
    return {
        entry: {
            app: [
                './src/index.ts',
                'webpack-dev-server/client?' + 'http://localhost:3000',
                'webpack/hot/only-dev-server'
            ],
            polyfill: './src/polyfills.ts',
        },
        mode: 'development',
        output: {
            filename: '[name].js',
            path: __dirname + '/dist',
        },
        devServer: {
            inline: true,
            port: 3000,
            publicPath: 'http://localhost:3000/',
            contentBase: [
                __dirname + '/src',
                __dirname + '/dist'
            ],
            proxy: {},
        },
        resolve: {
            extensions: ['.ts', '.js', '.html'],
            modules: ['node_modules', 'src']
        },
        module: {
            rules: [{
                test: /\.html/,
                use: [{
                    loader: 'html-loader'
                }]
            }, {
                test: /\.ts/,
                use: [{
                    loader: 'ts-loader'
                }]
            }],
        }
    }
}