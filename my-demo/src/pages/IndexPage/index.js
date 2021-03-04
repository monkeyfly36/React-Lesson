/*
 * @Author: your name
 * @Date: 2021-03-04 17:31:56
 * @LastEditTime: 2021-03-04 19:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-demo/src/pages/IndexPage/index.js
 */
import React, { Component } from 'react'
import styles from './index.module.scss'
import BottomNav from '../../component/BottomNav';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h3>Index</h3>
        <BottomNav />
      </div>
    )
  }
}
