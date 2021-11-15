import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import { 
    ConfigProvider,
    Radio,
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
            
            // <BrowserRouter>
            //     <Switch>
            //         <Route path = "/" component = {Login}/>
            //         <Route path = "/main" component = {Main}/>
            //     </Switch>
            // </BrowserRouter>
            <div>
                <ConfigProvider locale={locale}>
                    <BrowserRouter>
                        <Switch>
                            <Route path = "/" component = {Login} key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}/>
                            <Route path = "/main" component = {Main} key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}/>
                        </Switch>
                    </BrowserRouter>
                </ConfigProvider>

                <div className="change-locale">
                    <span style={{ marginRight: 16 }}>Change Your Language: </span>
                    <Radio.Group value={locale} onChange={this.changeLocale}>
                    <Radio.Button key="en" value={enUS}>
                        English
                    </Radio.Button>
                    <Radio.Button key="cn" value={zhCN}>
                        中文
                    </Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            
        )
    }
}
export default App
