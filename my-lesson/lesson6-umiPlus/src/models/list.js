import { getListReq } from '../mock/index'

export default{
  namespace: 'list',
  state: [],    // model管理的全局状态
  reducers: {   // 唯一可以修改 state 的地方,触发时机是dispatch
    add(state, { payload }) {
      console.log(state, payload, [...state,payload])
      return [...state, payload]   //返回值为更新的状态
    },
  },
  effects: {  // 用于处理异步操作和业务逻辑,触发时机是dispatch
   // *相当于async，yield相当于await
    *save({ payload: todo }, { put,call,select}) {
      // select 的参数是一个函数，函数接收的参数是所有model的状态，该条语句的接收值是函数的返回值
      const mystate= yield select(store=>{
        return store.list
      })
      //  getListReq需要返回promise,options是getListReq的入参
      const res= yield call(getListReq, {});
      console.log('res', res)
      // put和dispatch一样
      yield put({ type: 'add', payload: res });
    },
  },
  subscriptions: {    // 该选项中的函数自定义命名?函数的触发时机是初始时，主要用来初始化模块状态或者做一些准备性工作
    // 注意：subscription 需要返回 unlisten 方法，用于取消数据订阅。
    setup({ history, dispatch }) {
      //初始化模块状态   
      dispatch({type: 'initList', payload: JSON.parse(localStorage.getItem('umi_list'))})
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {  // history.listen监听方法返回 unlisten
        if (pathname === '/') {
          dispatch({ type: 'load' });
        }
      });
    },
  },
}
