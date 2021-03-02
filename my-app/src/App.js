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
import RouterPage from './router/RouterPage'

function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
      <SetStateComponent />
      <HomePage />
      <ReduxPage /> */}
      <RouterPage />
    </div>
  );
}

export default App;
