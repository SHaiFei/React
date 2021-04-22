import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import "./login.less"

import { login, captchaImage } from '../../api/login'

export default class Login extends Component {

    state = {
        loginForm: {
            username: "",
            password: "",
            uuid: ""
        },
    }

    componentDidMount () {
        // 获取uuid
        captchaImage().then(res => {
            if (res.code == 200) {
                this.state.loginForm.uuid = res.uuid
                // let data = this.state.loginForm
                // data.uuid = res.uuid
                // this.setState({
                //     loginForm: data
                // })
            } else {
                message.error(res.msg)
            }
        })
    }

    onFinish = (values) => {
        this.state.loginForm.username = values.username
        this.state.loginForm.password = values.password
        login(this.state.loginForm).then(res => {
            if (res.code == 200) {
                sessionStorage.setItem("token", res.token)
                this.props.history.replace("/index")
                message.success("登录成功");
            } else {
                message.error(res.msg)
            }
        })
    }
    render () {
        return (
            <div className="bgColor">
                <div className="bg">
                    <div className="login">
                        <Form name="basic" className="form" ref={this.formRef} onFinish={this.onFinish} >
                            <Form.Item name="username"
                                rules={[{ required: true, message: '请输入账号' }]} >
                                <Input />
                            </Form.Item>
                            <Form.Item name="password"
                                rules={[{ required: true, message: '请输入密码' }]} >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}