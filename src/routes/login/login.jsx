import React from 'react'
import {
    Button,
    Row,
    Form,
    Input,
    Icon
} from 'antd'
import { config } from '../../utils'
import styles from './login.less'

const FormItem = Form.Item

const login = ({
    loginButtonLoading,
    onOk,
    form: {
        getFieldDecorator,
        validateFieldsAndScroll
    }
}) => {
    function handleOk() {
        validateFieldsAndScroll((errors, values) => {
          if (errors) {
            return
          }
          onOk(values)
        })
    }

    document.onkeyup = e => e.keyCode===13 &&  handleOk()

    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <img src={config.logoSrc} alt=''/>
                <span>用户登录</span>
            </div>
            <form>
                <FormItem hasFeedback>
                    {
                        getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: '请填写用户名'
                                }
                            ]
                        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', fontSize: '20px' }} />} size="large" placeholder="手机号/邮箱/用户名"/>)
                    }
                </FormItem>
                <FormItem hasFeedback>
                {
                    getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请填写密码'
                            }
                        ]
                    })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', fontSize: '20px' }} />} size="large" type="password" placeholder="密码"/>)}
                </FormItem>
                <Row>
                    <Button type="primary" size="large" onClick={handleOk} loading={loginButtonLoading}>
                        登录
                    </Button>
                </Row>
            </form>
        </div>
    )
}

// login.propTypes = {
//     form: PropTypes.object,
//     loginButtonLoading: PropTypes.bool,
//     onOk: PropTypes.func
// }
export default Form.create()(login)