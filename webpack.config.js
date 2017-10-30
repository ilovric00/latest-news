const path = require('path');

module.exports = {
    //input
    entry: './src',

    //output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    //transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [
                            ["transform-object-rest-spread"],
                            ['transform-react-jsx', { pragma: 'h' }]
                        ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader?modules!sass-loader',
            },
        ]
    },

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        historyApiFallback: true,
        port: 9000
    }

};