import React, { Component } from 'react'
import logo from "../../assets/images/logo.png"

import "./header.less"



export default class Header extends Component {

    render () {
        let tabTitle = this.props.tabTitle
        console.log(tabTitle);
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" className="img" />
                    <ul>
                        <li >帮助中心</li>
                        {/* <li>{this.state.username}</li> */}
                        <li >退出</li>
                    </ul >
                </div>
                <ul className="nav hand flex">
                    {
                        tabTitle.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a> {item.meta.title}</a>
                                </li>
                            )
                        })
                    }
                </ul >
            </div >
        )
    }
}
