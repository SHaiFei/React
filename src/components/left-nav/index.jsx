import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Leftnav extends Component {

    state = {
        leftNavData: []
    }
    renderMenu = (data) => {
        console.log(data);
        if (data != undefined) {
            return data.map((item) => {
                <SubMenu key={item.path} title={item.meta.title}>
                    { this.renderMenu(item.childred) }
                </SubMenu>
            })
        }
    }
    componentDidMount () {
        console.log(this.props);
        
        // this.setState((prevState) => {
        //     return {
        //         leftNavData: prevState.leftNavData
        //     }
        // },()=>{console.log(this.state.leftNavData)})

        // this.renderMenu(this.state.leftNavData)

    }
    render () {
        return (
            <div style={{ width: "256px", height: "100%", background: "red" }}>
                <Menu mode="inline" >
                    {/* { this.props.leftNavData } */}
                </Menu>
                {/* <Menu mode="inline" style={{ width: 256 }}>
                    {
                        setTimeout(() => {
                            if (leftNavData != undefined) {
                                leftNavData.map(item => {
                                    return (
                                        <SubMenu key={item.path} title={item.meta.title}>
                                            {
                                                item.children.map((itemChildren) => {
                                                    <Menu.Item key={itemChildren.path}>
                                                        <Link to={itemChildren.path}>{itemChildren.meta.title}</Link>
                                                    </Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    )
                                })
                            }
                        })
                    }
                </Menu> */}
            </div>
        )
    }
}
