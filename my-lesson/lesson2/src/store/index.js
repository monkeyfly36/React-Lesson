// import {createStore, applyMiddleware, combineReducers} from "redux";
// import {combineReducers} from "redux";
import {createStore, applyMiddleware, combineReducers} from "../kredux/";

// import thunk from "redux-thunk";
// import logger from "redux-logger";

// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - action.payload || 1;
    default:
      return state;
  }
}

function countReducer2(state = { num: 0 }, {type, payload}) {
  switch (type) {
    case "ADD2":
      return {...state, num: state.num + payload};
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({count: countReducer, count2: countReducer2}),
  applyMiddleware(thunk, logger)
);
// 在thunk后面执行
function logger({dispatch, getState}) {
  return next => action => {
    console.log("+logger+"); //sy-log

    // prev state
    const prevState = getState();
    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);
    // next state
    const nextState = getState();
    console.log("next state", nextState); //sy-log

    return returnValue;
  };
}

// 这是处理异步的thunk中间件
function thunk({dispatch, getState}) {
  return next => action => {
    // console.log("+thunk+", next, dispatch, action);
    if (typeof action === "function") {
      console.log('异步调用')
      return action(dispatch, getState);
    }
    console.log('同步调用')
    return next(action);
  };
}

export default store;
