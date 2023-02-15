/*
 * @Author: your name
 * @Date: 2021-03-02 10:03:40
 * @LastEditTime: 2021-03-03 19:40:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/PureComponent/PureComponentPage.js
 */
import React, { PureComponent } from 'react';
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  setCount = () => {
    this.setState({ count: 100 })
  }
  // React.Component手动实现, PureComponent内置了shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count != this.state.count
  // }
  render() {
    const { count } = this.state
    // 不使用shouldComponentUpdate会一直打印
    console.log('count', count)
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    );
  }
}