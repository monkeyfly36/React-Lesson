import React, { useContext } from 'react';
import { ThemeContext } from './Context';

export default function UserPage(props) {
  // func组件Hook调用
  const ctx = useContext(ThemeContext)
  return (
    <div>
      <h3 className={ctx.themeColor}>UserPage</h3>
    </div>
  );
}