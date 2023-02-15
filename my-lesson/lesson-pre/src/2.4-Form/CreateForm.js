/*
 * @Author: your name
 * @Date: 2021-03-04 15:56:17
 * @LastEditTime: 2021-03-04 16:58:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/2.4-Form/CrateForm.js
 */
import React, { Component } from 'react'

export function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }
    getFieldValue = (name) => {
      return this.state[name]
    }
    getFieldsValue = () => {
      return this.state
    }
    setFieldsValue = (option) => {
      this.setState(option)
    }
    // hoc
    getFieldDecorator = (fieldName, option) => InputCmp => {
      this.options[fieldName] = option
      return React.cloneElement(InputCmp, {
        name: fieldName,
        value: this.state[fieldName] || '', 
        onChange: this.handleChange
      })
    }
    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({[name]: value})
    }
    // 校验
    validateFields = (callback) => {
      let err = []
      for(let fieldName in this.options) {
        if(this.state[fieldName] === undefined) {
          err.push({
            [fieldName]: this.options[fieldName]['rules'][0]['message']
          })
        }
      }
      if(err.length === 0) {
        callback(null, {...this.state})
      } else {
        callback(err, {...this.state})
      }
    }
    // 装饰器form的props
    getForm = () => {
      return {
        getFieldsValue: this.getFieldsValue,
        getFieldValue: this.getFieldValue,
        setFieldsValue: this.setFieldsValue,
        getFieldDecorator: this.getFieldDecorator,
        validateFields: this.validateFields
      }
    }
    render() {
      const form = this.getForm()
      return <Cmp {...this.props} form={form} />
    }
  }
}