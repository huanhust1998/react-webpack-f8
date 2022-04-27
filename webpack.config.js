const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",// Dẫn tới file index.js ta đã tạo
    output: {
        path: path.join(__dirname, "/build"),// Thư mục chứa file được build ra
        filename: "bundle.js"// tên file được build ra
    },
    module: {
        rules: [
            {// Sẽ sử dụng babel-loader cho những file .js
                test: /\.js$/,
                exclude: /node_modules/,// Loại trừ thư mục node_modules
                use: ["babel-loader"]
            },
            {// Sử dụng style-loader, css-loader cho file .css
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"  //webpack sau khi build file bundle.js sẽ thêm vào public/index.html luôn
        })
    ]
}