const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        module:{
            rules: [
    
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'html-loader',
                        },
                        {
                            loader: 'pug-html-loader',
                        },
                    ],
                },
    
            ],
        },
    plugins: [
        new HtmlWebpackPlugin({
          // Required
          filename: 'index.html',
          template: './src/hello.pug',
        })
    ]
}