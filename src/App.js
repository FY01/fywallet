/*
 * @Descripttion: 
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2021-11-14 17:06:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-16 13:20:36
 */

import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import LanguageButton from './components/LanguageButton';

import { 
    ConfigProvider,
} from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import Login from './pages/login/login'
import Main from './pages/main/main'

class App extends Component {
    constructor() {
        super();
        this.state = {
          locale: enUS,
        };
      }
      /**
       * @Author: FY01
       * @Descripttion: 
       * @param {*}
       * @return {*}
       */    
      changeLocale = e => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
          moment.locale('en');
        } else {
          moment.locale('zh-cn');
        }
      };
    render() {
        const { locale } = this.state;
        return (
            <div>
                {/* ConfigProvider : language config */}
                <ConfigProvider locale={locale}>
                    <BrowserRouter>
                        <Switch>
                            <Route path = "/" component = {Login} key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}/>
                            <Route path = "/main" component = {Main} key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}/>
                        </Switch>
                    </BrowserRouter>
                </ConfigProvider>

                {/* change language */}
                <LanguageButton locale = {locale} changeLocale = {this.changeLocale} enUS = {enUS} zhCN = {zhCN}/>
            </div>
        )
    }
}
export default App
