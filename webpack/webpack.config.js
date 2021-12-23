const path = require('path');

module.exports={
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"dist"),
        filename:"app.js",
    },
    mode:"development",
    module:{
        rules:[
            {
              test: /\.css$/,
              use: ["style-loader","css-loader"],
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader: 'file-loader',
            }     
        ]
    }
}