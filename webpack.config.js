const path = require('path');

module.exports = {
    entry: './src/game.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'game.js',
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/'},
            {test: /phaser\.js$/, loader: 'expose-loader',
                options: {
                    exposes: ['Phaser']
                }
            },
            {test: /\.(gif|png|jpe?g|svg|xml)$/i, loader: "file-loader"}
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/dist/',
        host: '127.0.0.1',
        port: 8080,
        open: true
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
        alias: {
            phaser: path.join(__dirname, '/node_modules/phaser/dist/phaser.js')
        }
    }
};
