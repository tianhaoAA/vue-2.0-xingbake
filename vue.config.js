module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: " http://localhost:3000/", //对应自己的接口
                changeOrigin: true, //允许跨越
                ws: true,
                pathRewrite: { //重写路径
                    "^/api": ""
                }
            },
            "/apiMap": {
                target: "https://apis.map.qq.com/", //对应自己的接口
                changeOrigin: true, //允许跨越
                ws: true,
                pathRewrite: { //重写路径
                    "^/apiMap": ""
                }
            },
        },
        // open: true, //是否自动打开浏览器
        overlay: {
            warnings: false,  //如果在webpack编译的过程中有任何的错误直接输出到页面上
            errors: false  //如果在webpack编译的过程中有任何的错误直接输出到页面上
        },
        // lintOnSave: false

    },
}