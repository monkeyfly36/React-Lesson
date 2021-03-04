/*
 * @Author: your name
 * @Date: 2021-03-02 16:53:29
 * @LastEditTime: 2021-03-03 19:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/Hook/Hook.js
 */
import React, { useState, useEffect } from 'react'

export default function Hook(props) {
  // 声明⼀个叫 “count” 的 state 变量，初始化为0
  const [count, setCount] = useState(0)
  // 相当于componentDidMount，componentDidUpdate，componentWillUnmount的集合
  useEffect(() => {
    console.log('count', count)
    document.title = `You clicked ${count} times`
  }, [count]) // !!!effect的条件执⾏
  return (
    <div>
      <h3>Hook</h3>
      <p>{count}</p> 
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}

// 自定义hook, 命名要以use开头
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    // timer只在DidMount时执行
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer) // !!!清除effect, 以防⽌内存泄漏
  }, [])
  return date
}
