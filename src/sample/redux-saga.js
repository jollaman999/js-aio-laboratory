import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { take, delay } from 'redux-saga/effects'

const ASYNC_ACTION1 = 'ASYNC_ACTION1';
const ASYNC_ACTION2 = 'ASYNC_ACTION2';

const reducer = (state = 0, action) => {
  console.log('REDUCER', state, action);
  return action.payload;
}

function* helloSaga() {
  while (true) {
    console.log('START HELLO SAGA')
    yield take(ASYNC_ACTION1);
    yield delay(1000);
    console.log('END ASYNC_ACTION1')
    yield take(ASYNC_ACTION2);
    yield delay(1000);
    console.log('END ASYNC_ACTION2')
  }
}


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga);

// 처음 호출된 dispatch 에 의해서 호출된 delay 함수가 끝나기 전에
// 다시 dispatch 가 호출되면 delay 함수는 한번만 실행된다.
// 위에서 delay 함수에 1초 (1000ms) 를 부여 했기 때문에
// 다음에 호출되는 함수는 1초 이상의 시간을 주어야 실행된다.
setTimeout(() => store.dispatch({type: ASYNC_ACTION1}), 1000);
setTimeout(() => store.dispatch({type: ASYNC_ACTION2}), 3000);
setTimeout(() => store.dispatch({type: ASYNC_ACTION1}), 5000);
setTimeout(() => store.dispatch({type: ASYNC_ACTION1}), 7000); // helloSaga wait ASYNC_ACTION2
setTimeout(() => store.dispatch({type: ASYNC_ACTION2}), 9000);

/*
START HELLO SAGA
REDUCER 0 {type: 'ASYNC_ACTION1'}
END ASYNC_ACTION1
REDUCER 0 {type: 'ASYNC_ACTION2'}
END ASYNC_ACTION2
START HELLO SAGA
REDUCER 0 {type: 'ASYNC_ACTION1'}
END ASYNC_ACTION1
REDUCER 0 {type: 'ASYNC_ACTION1'}
REDUCER 0 {type: 'ASYNC_ACTION2'}
END ASYNC_ACTION2
START HELLO SAGA
 */