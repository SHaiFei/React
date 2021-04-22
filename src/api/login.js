import request from '../utils/request'

// 获取验证码
export function captchaImage (query) {
    return request({
        url: '/captchaImage',
        method: 'get',
        params: query
    })
}

// 登录方法
export function login (data) {
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
}

// 获取用户详细信息
export function getRouters () {
    return request({
        url: '/gr',
        method: 'get'
    })
}