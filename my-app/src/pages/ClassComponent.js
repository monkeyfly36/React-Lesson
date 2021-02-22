import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // 组件挂载之后完成
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { date } = this.state
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default ClassComponent;