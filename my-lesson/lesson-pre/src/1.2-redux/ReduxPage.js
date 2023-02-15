import React, { Component } from "react"
// 直接使用redux，需要每次引入
// import store from "../store/";
// react-redux
import { connect } from "react-redux"

class ReduxPage extends Component {
  // 直接使用redux, 更新view
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate()
  //   })
  // }
  render() {
    const { num, add, minus } = this.props
    return (
      <div>
        <h3>ReduxPage</h3>
        {/* 直接使用redux
        <p>{ store.getState() }</p>
        <button onClick={() => store.dispatch({type: 'ADD'})}>Add</button> */}
        <p>{num}</p>
        <button onClick={add}>Add</button>
        <button onClick={minus}>minus</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({num: state})
const mapDispatchToProps = {
  add: () => {
    return { type: "ADD" }
  },
  minus: () => {
    return { type: "MINUS" }
  }
}

export default connect(
  // mapStateToProps 把state映射到props上, mapDispatchToProps 把dispatch映射到props上
  mapStateToProps,
  mapDispatchToProps
)(ReduxPage)