
const express = require('express')
const app = express()
const bodyParser = require('body-parser') //处理pots 请求体 res.body 是本次请求的数据


 
const userRouter =require('./routers/user.js') //用户的请求
/**
 * 配置post请求参数
 * */ 
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());



app.use(userRouter)

app.listen(3000, () => {
    console.log('服务器已启动 3000');
})