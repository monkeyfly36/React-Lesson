/*
 * @Author: your name
 * @Date: 2021-02-22 16:53:33
 * @LastEditTime: 2021-03-03 19:39:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/App.js
 */
import logo from './logo.svg';
import './App.css';
// class和component组件
// import ClassComponent from './pages/ClassComponent';
// import FunctionComponent from './pages/FunctionComponent.jsx';
// 数据响应式
// import SetStateComponent from './pages/SetStateComponent';
// 组件复用
// import HomePage from './pages/HomePage'
// Redux使用
// import ReduxPage from './redux/ReduxPage'
// React-Router使用
// import RouterPage from './router/RouterPage'
// PureComponent使用
// import PureComponent from './PureComponent/PureComponentPage'
// LifeCycle使用
// import LifeCycle from './LifeCycle/LifeCycle'
// Antd使用
// import Antd from './Antd/Antd'
// Hook使用
// import Hook from './Hook/Hook'
// UseMemo使用
// import UseMemoPage from './Hook/UseMemoPage'
// UseCallback使用
import UseCallbackPage from './Hook/UseCallbackPage'

function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
      <SetStateComponent />
      <HomePage />
      <ReduxPage />
      <RouterPage />
      <PureComponent />
      <LifeCycle />
      <Antd />
      <Hook />
      <UseMemoPage /> */}
      <UseCallbackPage />
    </div>
  );
}

export default App;
