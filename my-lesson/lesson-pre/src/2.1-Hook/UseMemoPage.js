/*
 * @Author: your name
 * @Date: 2021-03-03 19:13:57
 * @LastEditTime: 2021-03-03 19:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/Hook/UseMemoPage.js
 */
import React, { useState, useMemo } from 'react'

export default function UseMemoPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("")
  
  const expensive = useMemo(() => {
    console.log("compute")
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
    //只有count变化，这⾥才重新执⾏
  }, [count])
  
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>expensive:{expensive}</p> 
      <p>{count}</p> 
      <button onClick={() => setCount(count + 1)}>add</button> 
      <input value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}