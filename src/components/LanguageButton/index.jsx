/*
 * @Descripttion: change language components
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2021-11-16 09:09:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-16 13:36:23
 */

import React, { Component } from 'react'

import {
    Affix,
    Radio,
} from 'antd';



export default class LanguageButton extends Component {

    handleOnChange = (e) => {
        this.props.changeLocale(e)
    }

    render() {
        const { locale, enUS, zhCN } = this.props
        return (
            <Affix 
            style={{ position: 'absolute', bottom: 50, right: 10 }}
            >
                <Radio.Group value={locale} onChange={this.handleOnChange}>
                    <Radio.Button key="en" value={enUS}>
                        English
                    </Radio.Button>
                    <Radio.Button key="cn" value={zhCN}>
                        中文
                    </Radio.Button>
                </Radio.Group>
            </Affix>
        )
    }
}
