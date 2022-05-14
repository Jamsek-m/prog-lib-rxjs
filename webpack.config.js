const path = require("path");
require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        "rxjs-utils": "./src/index.ts",
        "rxjs-utils.min": "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: {
            name: "RXJSUtils",
            type: "umd"
        },
        globalObject: "this"
    },
    externals: {
        rxjs: {
            commonjs: "rxjs",
            commonjs2: "rxjs",
            amd: "rxjs",
            root: "_",
        }
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    },
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};
