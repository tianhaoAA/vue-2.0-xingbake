const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    // 手机号
    mobile: {
        type: String,
        require: true,
    },
    // 验证码
    code: {
        type: String,
        require: true,
    },
    // 创建时间
    created_time: {
        type: Date,
        default: Date.now
    },
})

module.exports =userSchema