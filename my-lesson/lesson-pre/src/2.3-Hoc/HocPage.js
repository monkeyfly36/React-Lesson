/*
 * @Author: your name
 * @Date: 2021-03-04 12:25:14
 * @LastEditTime: 2021-03-04 14:34:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/2.3-Hoc/HocPage.js
 */
import React, { Component } from 'react'

// hoc是个函数
// 参数是组件, 返回值是个新的组件
const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  )
} 
function Child(props) {
  return <div>Child - {props.name}</div>
}
// A.链式不建议这种方法
const Foo = foo(foo(Child))

// B.链式装饰器推荐
@foo
@foo
class ClassChild extends Component {
  render() {
    return <div>ClassChild - {this.props.name}</div>
  }
}

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo name="Func" />
        <ClassChild name="Class" />
      </div>
    )
  }
}
