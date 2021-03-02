import React, { Component } from "react"
import PropTypes from "prop-types"
/*
V17可能会废弃的三个⽣命周期函数⽤getDerivedStateFromProps替代，⽬前使⽤的话加上
UNSAFE_：
- componentWillMount
- componentWillReceiveProps
- componentWillUpdate
 */
export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: "omg"
  }
  static propTypes = {
    msg: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log("constructor", this.state.count)
  }
  // 新增API
  static getDerivedStateFromProps(props, state) {
    // getDerivedStateFromProps 会在调⽤ render ⽅法之前调⽤，
    //并且在初始挂载及后续更新时都会被调⽤。
    //它应返回⼀个对象来更新 state，如果返回 null 则不更新任何内容。
    const { count } = state
    console.log("getDerivedStateFromProps", count)
    return count < 5 ? null : { count: 0 }
  }
  //在render之后，在componentDidUpdate之前。返回值为componentDidUpdate的参数。
  getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
    const { count } = prevState
    console.log("getSnapshotBeforeUpdate", prevState, this.state)
    return {
      msg: 'getSnapshotBeforeUpdate'
    }
  }
  // UNSAFE_componentWillMount() {
  //   //不推荐，将会被废弃
  //   console.log("componentWillMount", this.state.count)
  // }
  componentDidMount() {
    console.log("componentDidMount", this.state.count)
  }
  componentWillUnmount() {
    //组件卸载之前
    console.log("componentWillUnmount", this.state.count)
  }

  // UNSAFE_componentWillUpdate() {
  //   //不推荐，将会被废弃
  //   console.log("componentWillUpdate", this.state.count)
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot)
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState
    console.log("shouldComponentUpdate", nextState, this.state)
    return count !== 3
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    const { count } = this.state
    console.log("render", this.state)
    return (
      <div> 
        <h1>我是LifeCycle⻚⾯</h1> 
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* { count % 2 && <Child count={count} /> }  */}
        <Child count={count} />
      </div>
    )
  }
}
class Child extends Component {
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // 不推荐，将会被废弃, 会在已挂载的组件接收新的 props 之前被调⽤
  //   // 初次渲染不会执行, 只有在已挂载的组件接收新的props的时候, 才会执行
  //   console.log("Foo componentWillReceiveProps", nextProps)
  // }
  componentWillUnmount() {
    //组件卸载之前
    console.log("Child componentWillUnmount")
  }
  render() {
    console.log('props', this.props)
    return (
      <div style={{ border: "solid 1px black", margin: "10px", padding: "10px" }}>
        我是Foo组件
        <div>Foo count: {this.props.count}</div>
      </div>
    )
  }
}