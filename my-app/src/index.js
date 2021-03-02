/*
 * @Author: your name
 * @Date: 2021-02-22 16:53:33
 * @LastEditTime: 2021-02-22 17:45:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 使用react-redux, 注意与直接使用redux区别
import store from './store/'
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
