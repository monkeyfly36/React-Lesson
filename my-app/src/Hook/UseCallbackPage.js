/*
 * @Author: your name
 * @Date: 2021-03-03 19:14:09
 * @LastEditTime: 2021-03-03 19:53:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/src/Hook/UseCallbackPage.js
 */
import React, { useState, useCallback, PureComponent } from "react"
export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0)
  
  // 不使用useCallback, input值改变的时候也会触发子组件addClick
  const addClick = useCallback(() => {
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  const [value, setValue] = useState("")
  return (
    <div> 
      <h3>UseCallbackPage</h3> 
      <p>{count}</p> 
      <button onClick={() => setCount(count + 1)}>add</button> 
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}
class Child extends PureComponent {
  render() {
    console.log("child render")
    const { addClick } = this.props
    return (
      <div> 
        <h3>Child</h3> 
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    )
  }
}