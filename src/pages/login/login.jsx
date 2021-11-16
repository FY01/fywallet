/*
 * @Descripttion: login page
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2021-11-14 22:29:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-16 14:46:04
 */

import React, { Component } from 'react'

import {
    Menu,
    Dropdown,
    Icon,
    message,
    Button,
} from 'antd';


import LoginForm from '../../components/LoginForm';
import logo from "../../assets/mages/logo.svg"
import "./login.less"


export default class Login extends Component {

    // handle drop-down menu
    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    }
    handleMenuClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    }
    //drop-down menu's data
    menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">
                <Icon type="user" />
                1st menu item
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                3rd item
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <div className="login">
                {/* <header className="login-header">
                    <div className="header-logo">
                        <img src={logo} alt="logo" />
                        <h1>fywallet</h1>
                    </div>
                    <Dropdown overlay={this.menu} className="network">
                        <Button>
                            Button
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                </header>
                <section className="login-content">
                    <img src={logo} alt="svg" />
                    <p className="regards">欢迎回来!<br /><span>即将进入去中心化网路</span></p>

                    <LoginForm />
                    <p>need help？contact<a href="https://support.metamask.io" target="_blank" rel="noopener noreferrer">&nbsp;fywallet Support</a></p>
                </section> */}
                <div className="login-header">
                    <div className="header-logo">
                        <img src={logo} alt="logo" />
                        <h1>fywallet</h1>
                    </div>
                    <Dropdown overlay={this.menu} className="network">
                        <Button>
                            以太坊主网络
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                <div className="login-content">
                    <img src={logo} alt="svg" />
                    <p className="regards">欢迎回来!<br /><span>即将进入去中心化网路</span></p>

                    <LoginForm />
                    <p>need help？contact<a href="https://support.metamask.io" target="_blank" rel="noopener noreferrer">&nbsp;fywallet Support</a></p>
                </div>
                <div className="login-footer">

                </div>
            </div>
        )
    }
}
