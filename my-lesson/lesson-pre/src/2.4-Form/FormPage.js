/*
 * @Author: your name
 * @Date: 2021-03-04 14:56:19
 * @LastEditTime: 2021-03-04 17:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/2.4-Form/FormPage.js
 */
import React, { Component } from 'react'
import Input from './Input'
// import { createForm } from 'rc-form'
// 自定义createForm
import { createForm } from './CreateForm'

const nameRules = { required: true, message: '姓名不能为空' }
const passwordRules = { required: true, message: '密码不能为空' }

// @createForm()
@createForm
class FormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  componentDidMount() {
    const { setFieldsValue } = this.props.form
    setFieldsValue({username: 'admin'})
  }
  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form

    validateFields((err, vals) => {
      if(err) {
        console.error('Validate Failed', err)
      } else {
        console.log('Validate Success', getFieldsValue())
      }
    })
  }
  render() {
    console.log('props', this.props)
    const { username, password } = this.state
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>FormPage</h3>
        {getFieldDecorator('username', {rules: [nameRules]})(
          <Input placeholder="Username"/>
        )}
        {getFieldDecorator('password', {rules: [passwordRules]})(
          <Input placeholder="Password"/>
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}
export default FormPage
