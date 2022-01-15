import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";

const INITIAL_STATE = { user: ''};
const SET_USER = "SET_USER";

function actionCreator(type, payload) {
  return { type, payload };
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
  }
  return state;
};

const fetchUser = id => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
      return dispatch(actionCreator(SET_USER, user));
    });
};

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

store.dispatch(fetchUser(Math.floor(Math.random() * 10) + 1));

// store.subscribe(() => {
//   console.log(store.getState());
// });

function Component() {
  const user = useSelector(state => state.user);
  // console.log('selector', user)
  return (
    <>
      {user?.name}
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Component/>
  </Provider>,
  document.getElementById('redux-thunk')
)




