import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { message } from 'antd';
import Login from "./pages/login/Login";
import Index from "./pages/index";

export default class App extends Component {

    handleClick = () => {
        message.info('点击成功');
    }
    render () {
        return (
            <BrowserRouter>
                <Switch> {/* 只匹配其中一个路由 */}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/index" component={Index}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}