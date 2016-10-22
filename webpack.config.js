module.exports = {
    entry: "./app.js",
    output: {
        path: "./",
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 3334
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}