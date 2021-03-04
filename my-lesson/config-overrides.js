/*
 * @Author: your name
 * @Date: 2021-03-02 15:52:36
 * @LastEditTime: 2021-03-04 14:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Lesson/my-app/config-overrides.js
 */
//根⽬录创建config-overrides.js, 修改默认配置
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require("customize-cra")
module.exports = override(
  fixBabelImports("import", { //antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  // 设置主题色
  addLessLoader({
    modifyVars: {
      "@primary-color": "red",
      "@border-color-base": "green",
      "@link-color": "orange"
    }
  }),
  // 装饰器
  addDecoratorsLegacy()
)