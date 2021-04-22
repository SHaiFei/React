import React, { Component } from 'react'

import Header from "../../components/header"
import LeftNav from "../../components/left-nav"

import { getRouters } from "../../api/login"
import { message } from 'antd'

export default class Index extends Component {

    state = {
        tabTitle: [],
        leftNavData: []
    }
    componentDidMount () {
        // 获取列表数据
        getRouters().then(res => {
            if (res.code == 200) {
                res.data.forEach(item => {
                    this.state.tabTitle.push(item.meta.title)
                    this.state.leftNavData.push(item.children)
                });
                // this.setState({
                //     navList: res.data
                // })
            } else {
                message.error(res.msg)
            }
        })
    }
    render () {
        let tabTitle = this.state.tabTitle
        console.log(tabTitle);
        // let leftNavData = this.state.leftNavData
        return (
            <div>
                {/* <Header tabTitle={tabTitle}></Header> */}
                {/* <LeftNav leftNavData={leftNavData}></LeftNav> */}
                {/* <Switch>
                    <Home></Home>
                </Switch> */}
                {/* <Route path="/home" component={Home}></Route> */}
            </div>
        )
    }
}
