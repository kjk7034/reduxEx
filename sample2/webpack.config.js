module.exports = {
    entry:"./main.js",
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.json$/, loader: 'json' },
        ]
    }
}