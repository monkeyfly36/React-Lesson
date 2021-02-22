import React, { useState, useEffect } from 'react'

function FunctionComponent(props) {
  const [date, setDate] = useState(new Date())
  // 相当于componentDidMount，componentDidUpdate，componentWillUnmount的集合
  useEffect(() => {
    console.log('useEffect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // 组件卸载，清除定时器
    return () => clearInterval(timer)
  }, []) 
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default FunctionComponent