/*
 * @Descripttion:  component be use in login
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2021-11-15 12:11:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-16 14:22:25
 */

import React from 'react';


import { Form, Icon, Input, Button } from 'antd';

import './index.less'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
          <Button type="primary" htmlType="submit" className="login-form-button">
            解锁
          </Button>
          Or <a className = "link" href = ":javascript" alt = "import using Secret Recovery Phrase">import using Secret Recovery Phrase</a>
        </Form.Item>
      </Form>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm