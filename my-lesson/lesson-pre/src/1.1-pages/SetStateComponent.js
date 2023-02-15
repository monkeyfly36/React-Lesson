import React, { Component } from 'react';

class SetStateComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  changeValue = v => {
    // setState在合成事件和生命周期中是异步的，这里说的异步是批量更新，达到优化性能的目的
    this.setState({
      counter: this.state.counter + v
    })
    // 执行顺序先打印，后赋值
    console.log('counter', this.state.counter)

    // function可支持链式调用
    // this.setState(state => {
    //   console.log('counter', state.counter + v)
    //   return {
    //     counter: state.counter + v
    //   }
    // })
  }
  setCounter = () => {
    // setState异步
    this.changeValue(1)
    this.changeValue(2)
    // setState在setTimeout是同步的
    // setTimeout(() => {
    //   this.changeValue(1)
    // }, 0)
  }
  render() {
    return (
      <div>
        <h3>SetStateComponent</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    );
  }
}

export default SetStateComponent;