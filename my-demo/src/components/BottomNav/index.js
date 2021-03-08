/*
 * @Author: your name
 * @Date: 2021-03-04 17:31:56
 * @LastEditTime: 2021-03-04 19:14:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-demo/src/pages/IndexPage/index.js
 */
import React, { Component } from 'react'
import styles from './index.module.scss'

const menu = [
  {
    title: '首页',
    icon: 'apartment-home',
    link: '/',
  },
  {
    title: '购物车',
    icon: 'gouwuche',
    link: '/cart',
  },
  {
    title: '订单列表',
    icon: 'dingdan',
    link: '/orderlist',
  },
  {
    title: '用户中心',
    icon: 'yonghu',
    link: '/user',
  }
]
export default class BottomNav extends Component {
  render() {
    const {activeNum, setActiveNum} = this.props
    // setActiveNum({[activeNum]: activeNum})
    return (
      <div className={styles.main}>
        {menu.map((item, index) => (
          <MenuItem 
            key={item.link} {...item} 
            active={activeNum === index } 
            onClick={() => setActiveNum(index) }
          />
        ))}
      </div>
    )
  }
}
function MenuItem({title, icon, active, onClick}) {
  return (
    <div className={`${styles.menuItem} ${(active ? styles.selected : '')}`} onClick={onClick}>
      <span className={"iconfont icon-" + icon}></span>
      <span className={styles.title}>{title}</span>
    </div>
  )
}
