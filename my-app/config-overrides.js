//根⽬录创建config-overrides.js, 修改默认配置
const { override, fixBabelImports, addLessLoader } = require("customize-cra")
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
  })
)