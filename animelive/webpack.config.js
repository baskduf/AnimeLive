const path = require('path');
const glob = require('glob');

module.exports = {
    entry: glob.sync('./static/cubism/**/*.ts'), // 모든 .ts 파일을 포함
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/cubism/js'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
};

