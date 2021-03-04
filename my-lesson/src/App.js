/*
 * @Author: your name
 * @Date: 2021-02-22 16:53:33
 * @LastEditTime: 2021-03-04 15:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/App.js
 */
import logo from './logo.svg';
import './App.css';

// class和component组件
// import ClassComponent from './1.1-pages/ClassComponent';
// import FunctionComponent from './1.1-pages/FunctionComponent.jsx';
// 数据响应式
// import SetStateComponent from './1.1-pages/SetStateComponent';
// 组件复用
// import HomePage from './1.1-pages/HomePage'
// Redux使用
// import ReduxPage from './1.2-redux/ReduxPage'
// React-Router使用
// import RouterPage from './1.3-router/RouterPage'
// PureComponent使用
// import PureComponent from './1.4-PureComponent/PureComponentPage'
// LifeCycle使用
// import LifeCycle from './1.5-LifeCycle/LifeCycle'
// Antd使用
// import Antd from './1.6-Antd/Antd'
// Hook使用
// import Hook from './2.1-Hook/Hook'
// UseMemo使用
// import UseMemoPage from './2.1-Hook/UseMemoPage'
// UseCallback使用
// import UseCallbackPage from './2.1-Hook/UseCallbackPage'
// Dialog使用
// import DialogPage from './2.2-Dialog/DialogPage'
// Hoc使用
// import HocPage from './2.3-Hoc/HocPage'
// Form使用
import FormPage from './2.4-Form/FormPage'

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
      <UseMemoPage />
      <UseCallbackPage />
      <DialogPage />
      <HocPage /> */}
      <FormPage />
    </div>
  );
}

export default App;
