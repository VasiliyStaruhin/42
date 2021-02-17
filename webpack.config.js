const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = (env) => {
    return {
        context: __dirname,
        entry: './src/index.js',
        output: {
            path: path.resolve( __dirname, 'dist' ),
            filename: 'main.js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                src: path.resolve('./src')
            }
        },
        devServer: {
            historyApiFallback: true,
            open: true,
            compress: true,
            port: env.port || 3000
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|j?g|svg|gif)?$/,
                    use: 'file-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve( __dirname, 'public/index.html' ),
                filename: 'index.html'
            })
        ]
    }
};