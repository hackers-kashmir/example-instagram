var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    context: __dirname,

    entry: {
        app: [
            "webpack-dev-server/client?http://localhost:3200",
            "webpack/hot/only-dev-server",
            "./src/js/index.js"
        ]
    },

    output: {
        path: path.resolve("./dist"),
        filename: "assets/[name]-[hash].js",
        publicPath: "/"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(), // don"t reload if there is an error
        new HtmlWebpackPlugin({
            title: "Instagram",
            template: "src/index.tmpl"
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel"]
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.scss$/,
                include: path.resolve("./src/sass/local/"),
                loaders: [
                    "style",
                    "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?" +
                    "sourceMap&" +
                    "includePaths[]=" +
                    (path.resolve(__dirname, "./bower_components")) + "&" +
                    "includePaths[]=" +
                    (path.resolve(__dirname, "./node_modules"))
                ]
            },
            {
                test: /\.scss$/,
                exclude: path.resolve("./src/sass/local/"),
                loader: [
                    "style",
                    "css!sass?sourceMap&" +
                    "includePaths[]=" +
                    (path.resolve(__dirname, "./bower_components")) + "&" +
                    "includePaths[]=" +
                    (path.resolve(__dirname, "./node_modules"))
                ]
            },
            {
                test: /\.sass$/,
                loader: "style!css!sass?indentedSyntax&sourceMap"
            },
            {
                test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]"
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff&name=assets/[hash].[ext]"
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=assets/[hash].[ext]"
            },
            {
                test: /\.json$/,
                loaders: ["json-loader"]
            }
        ]
    },

    resolve: {
        root: path.resolve("./src/"),
        modulesDirectories: ["node_modules", "bower_components"],
        extensions: ["", ".json", ".js", ".jsx"]
    }
};
