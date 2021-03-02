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