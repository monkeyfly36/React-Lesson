import logo from './logo.svg';
import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import { mapDispatch } from './redux';
import actionCounter from './actions/counter'
import React, { Component } from 'react';

// 传统写法
// const App = (props) => {
//   // const counter = useSelector(state => state.counter)
//   // const dispatch = useDispatch()
//   // const reduce = () => {
//   //   dispatch({type: 'reduce'})
//   // }
    
//   const { counter, add, reduce, addAsync } = props
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       <div style={{ padding: '0 0 50px 0' }}>
//         <button onClick={add}>+</button>
//         <button onClick={addAsync} style={{ margin: '0 0 0 10px'}}>+Async</button>
//         <button onClick={reduce} style={{ margin: '0 0 0 10px'}}>-</button>
//         <div>{counter}</div>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = {
//   ...mapDispatch(actionCounter, [
//     'add',
//     'reduce',
//     'addAsync',
//   ])
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// 装饰器写法, 可以抽到单独的connect.js里, 后续只加一个@connect
// 报错参考 https://blog.csdn.net/liuye066/article/details/127889894
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = {
  ...mapDispatch(actionCounter, [
    'add',
    'reduce',
    'addAsync',
  ])
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const { counter, add, reduce, addAsync } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{ padding: '0 0 50px 0' }}>
          <button onClick={add}>+</button>
          <button onClick={addAsync} style={{ margin: '0 0 0 10px'}}>+Async</button>
          <button onClick={reduce} style={{ margin: '0 0 0 10px'}}>-</button>
          <div>{counter}</div>
        </div>
      </div>
    );
  }
}

export default App;


