
import {
  // take, takeEvery, put, call, select, delay, race, fork, cancel, all, cancelled, spawn
  take, put, call, all, spawn
} from 'redux-saga/effects';
import { getList } from '../api/index'


export function* helloSaga() {
  yield console.log('Hello saga')
}


export function* addWatcher() {
  while (true) {
    // take配合while true监听action
    // 通过mapDispatchToProps注册, 当组件通过props调用, 就走进来
    yield take('addAsync');
    // 进行异步操作
    const res = yield call(getList)
    console.log('res', res.data)
    // 真正的action, 最终通过reducer改变state
    yield put({ type: 'add'})
  }
}

const sagaWatcherList = [
  helloSaga,
  addWatcher
]

function* sagaRoot() {
  const sagas = [
    ...sagaWatcherList
  ];

  yield all(sagas.map(saga => spawn(function* s() {
    while (true) {
      try {
        yield call(saga)
        console.warn(`saga terminated unexpected: ${saga}`)
        break;
      } catch (err) {
        console.warn(err)
      }
    }
  })));
}

export default sagaRoot;

