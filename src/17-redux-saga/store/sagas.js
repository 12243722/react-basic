import { takeEvery, put, call } from 'redux-saga/effects'

function* addcount (action) {
  // 发送对应的dispatch,触发action
  yield put({type: 'INCREMNET', num: action.num})
}

// 获取数据
function* getDate (action) {
  // 做异步请求
  const res = yield call(() => {
    return fetch('https://www.fastmock.site/mock/f6da2d51373e2d56be34e0119e611452/redux/api/list')
      .then(response => response.json())
      .then(res => res)
  })
  // 发送对应的dispatch,触发action
  yield put({type: 'GETLIST', list: res.list})
}

function* mySaga () {
  // 监听对应的action， 每次触发dispatch都会触发
  yield takeEvery('ADD', addcount)
  yield takeEvery('LOAD', getDate)
}

export default mySaga