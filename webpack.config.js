const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'), // path.resolve()对两个路径进行拼接
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-preset-env')()
                                ]
                            },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'css/main.css'}),
        new OptimizeCssAssetsWebpackPlugin()
    ]
};