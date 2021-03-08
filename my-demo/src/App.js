/*
 * @Author: your name
 * @Date: 2021-03-04 17:27:23
 * @LastEditTime: 2021-03-04 17:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-demo/src/App.js
 */
import React, { useState } from 'react'
import IndexPage from './pages/IndexPage'
import CartPage from './pages/CartPage'
import OrderListPage from './pages/OrderListPage'
import UserPage from './pages/UserPage'
import BottomNav from './components/BottomNav'

function App() {
  const [activeNum, setActiveNum] = useState(0)
  return (
    <div className="App">
      {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  )
}

export default App;
