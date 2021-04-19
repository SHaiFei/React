import React, { Component } from "react"
import Header from "./pages/header/Header"
import Login from "./pages/login/Login"

import 'antd/dist/antd.css'

export default class App extends Component{
    render () {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Login></Login>
                {/* <Header></Header> */}
            </div>
        )
    }
}