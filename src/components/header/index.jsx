import React, { Component } from 'react'
import logo from "../../assets/images/logo.png"

import "./header.less"

export default class Header extends Component {

    state = {
        active: parseInt(sessionStorage.getItem("childrenIndex") ? sessionStorage.getItem("childrenIndex") : 0)
    }

    componentDidMount () {
    }
    handleClick = index => {

        this.props.changeTitle(this, this.state.active)
        let childrenIndex = undefined
        childrenIndex = sessionStorage.setItem("childrenIndex", index)
        this.setState({
            active: index
        });
    };
    render () {
        let tabTitle = this.props.tabTitle
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" className="img" />
                    <ul>
                        <li>帮助中心</li>
                        <li>退出</li>
                    </ul >
                </div>
                <ul className="nav hand flex">
                    {
                        tabTitle.map((item, index) => {
                            return (
                                <li key={index} onClick={() => { this.handleClick(index); }}>
                                    <a className={this.state.active === index ? 'current' : ''}>{item}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
