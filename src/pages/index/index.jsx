import React, { Component } from 'react'

import Header from "../../components/header"
import LeftNav from "../../components/left-nav"

import { getRouters } from "../../api/login"
import { message } from 'antd'
import Leftnav from '../../components/left-nav'

export default class Index extends Component {

    state = {
        tabTitle: [],
        leftNavData: [],
        active: 0,
        navList: []
    }

    changeCurnIndex () {
        this.setState({
            active: sessionStorage.getItem("childrenIndex")
        })
    }

    componentDidMount () {
        // 获取列表数据
        getRouters().then(res => {
            if (res.code == 200) {
                res.data.forEach(item => {
                    this.state.tabTitle.push(item.meta.title)
                    this.state.leftNavData.push(item.children)
                });
                this.setState({ })
            } else {
                message.error(res.msg)
            }
        })
    }

    getTabTitle = (result) => {
        console.log(result);
        switch (result) {
            case 0:
                this.state.navList = this.state.leftNavData[0];
                break
            case 1:
                this.state.navList = this.state.leftNavData[1];
                break
            case 2:
                this.state.navList = this.state.leftNavData[2];
                break
            case 3:
                this.state.navList = this.state.leftNavData[3];
                break
            case 4:
                this.state.navList = this.state.leftNavData[4];
                break
            case 5:
                this.state.navList = this.state.leftNavData[5];
                break
            case 6:
                this.state.navList = this.state.leftNavData[6];
                break
        }
    }
    render () {
        let tabTitle = this.state.tabTitle
        let childrenIndex = sessionStorage.getItem("childrenIndex")
        let leftNavData = this.state.leftNavData[childrenIndex]
        return (
            <div>
                <Header tabTitle={tabTitle} changeTitle={this.getTabTitle}></Header>
                <LeftNav leftNavData={leftNavData}></LeftNav>
                {/* <Switch>
                    <Home></Home>
                </Switch> */}
                {/* <Route path="/home" component={Home}></Route> */}
            </div>
        )
    }
}
