import './index.less'
import React from 'react';
import LoginTitle from 'assets/image/login-title1.png'
import { Form, Icon, Input, Button } from 'antd';
class Login extends React.Component{
    state  ={
        isPass: '1',
        count:0
     }  
     changeRouter(type){
         this.setState({
             isPass: type
         })
         this.props.form.resetFields()
     } 
     handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return  <div className="login-bg">
        <div className="login-box">
            <div className="login-main">
                <p className="login-title">
                 <img src={LoginTitle} alt=""/>
                </p>
               <div className="changeLogin">
                <ul>
                <li className={this.state.isPass === '1' ? 'active' : null} onClick={()=>this.changeRouter('1')}>密码登录</li>
                <li className={this.state.isPass === '2' ? 'active' : null} onClick={()=>this.changeRouter('2')}>手机验证码登录</li>
                </ul>
            </div>
            <Form className="login-form" onSubmit={this.handleSubmit}>
            <Form.Item>
                {getFieldDecorator('mobile', {
                rules: [{ required: true, message: '请输入手机号码' }],
                })(
                    <Input
                    prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="手机号码"
                    />,
                )}
            </Form.Item>
            {this.state.isPass === '1' ? 
            <Form.Item>
            {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="密码"
                />,
            )}
            </Form.Item>:
            <Form.Item>
                 {getFieldDecorator('code', {
                rules: [{ required: true, message: '请输入验证码' }],
                })(
                    <Input
                    prefix={<Icon type="block" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="验证码"
                    />
                )}
                <Button className="getCode">获取验证码</Button>
            </Form.Item>
            }
            <Form.Item>
                <Button type="primary" htmlType="submit" className="submit-info">
                    登录
                </Button>
            </Form.Item>
            </Form>
            </div>
        </div>
        </div>
    }
}
export default Form.create()(Login)