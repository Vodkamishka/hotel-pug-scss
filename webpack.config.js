const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        index: './src/components/landing/landing.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                loader:  "pug-loader",
                  options: {
                      name: "[name].pug"       
                  }
            },
            {
                test: /\.(gif|png|jpeg|svg|jpg)$/,
                  loader:  "file-loader",
                  options: {
                      name: "[name].[ext]"       
                  }
              },
              {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                  loader:  "file-loader",
                  options: {
                      name: "[name].[ext]"       
                  }
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
        new HTMLWebpackPlugin({
            hash: false,
            template: `./src/components/landing/landing.pug`,
           }),
        new CopyWebpackPlugin([
            { from: './src/assets/img', to: './assets/img' },
            { from: './src/assets/fonts', to: './assets/fonts' },
          ]),
    ]
}