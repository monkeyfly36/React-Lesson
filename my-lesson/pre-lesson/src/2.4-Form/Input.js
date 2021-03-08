/*
 * @Author: your name
 * @Date: 2021-03-04 15:52:02
 * @LastEditTime: 2021-03-04 15:55:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/2.4-Form/Input.js
 */
import React, { Component } from 'react'

const Input = props => {
  return <input {...props} />
}

class CustomizeInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {value = "", ...otherProps} = this.props
    return (
      <div style={{padding: 10}}>
        <Input style={{outline: 'none'}} value={value} {...otherProps} />
      </div>
    )
  }
}
export default CustomizeInput
