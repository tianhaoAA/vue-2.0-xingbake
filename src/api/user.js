/****
 * 
 *  此模块专门处理用户
 * */
import request from '@/utils/request' 

//  用户登录
export function login(data) {
    console.log(data);
    return request({
        url: '/login',
        method:'post',
        data
     })
}