/*
 * @Author: your name
 * @Date: 2021-03-04 11:45:23
 * @LastEditTime: 2021-03-04 12:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/component/Dialog.js
 */
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  componentWillUnmount() {
    if(this.node) {
      window.document.body.removeChild(this.node)
    }
  }
  render() {
    return createPortal(
      <div className="dialog">
        <h3>Dialog</h3>
      </div>,
      this.node
    )
  }
}
