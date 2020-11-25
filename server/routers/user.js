//  此模块专门处理用户的路由
require('./linkedDB') //建立数据库
const express = require('express') //引入 express
const router = express.Router() //创建路由
const User = require('../module/users')

router.post('/login', (req, res) => {
    let body = req.body
    User.findOne({
            mobile:body.mobile
    }, (error, data) => {
            if (error) {
                return res.status(500).json({
                    err_code: 500,
                    msg:'服务器繁忙'
                })       
            }
            if (data) {
                if (data.code === body.code) {
                    return res.status(200).json({
                        err_code: 0,
                        msg:'登录成功'
                    }) 
                } else {
                    return res.status(200).json({
                        err_code: 1,
                        msg:'密码错误'
                    })  
                }
            } else {
                new User(body).save((error, data) => {
                    if (error) {
                        return res.status(500).json({
                            err_code: 500,
                            msg:'服务器繁忙'
                        }) 
                    } 
                   // 保存成功
                  res.status(200).json({
                    err_code: 0,
                    msg:'注册成功'
                })

                    
              })
            }
    })
})

module.exports = router