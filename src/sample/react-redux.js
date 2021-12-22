import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';

const CLASS_INCREMENT = 'CLASS_INCREMENT';
const FUNCTION_INCREMENT = 'FUNCTION_INCREMENT';
const CLASS_DECREMENT = 'CLASS_DECREMENT';
const FUNCTION_DECREMENT = 'FUNCTION_DECREMENT';

function counter(state, action) {
  if (state === undefined) {
    return { classCount: 0, functionCount: 0 };
  }

  switch (action.type) {
    case CLASS_INCREMENT:
      return {
        ...state,
        classCount: state.classCount + 1,
      };
    case FUNCTION_INCREMENT:
      return {
        ...state,
        functionCount: state.functionCount + 1,
      };
    case CLASS_DECREMENT:
      return {
        ...state,
        classCount: state.classCount - 1,
      };
    case FUNCTION_DECREMENT:
      return {
        ...state,
        functionCount: state.functionCount - 1,
      };
    default:
      return state;
  }
}

const store = createStore(counter);

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        🍓 <span>{count}</span>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.classCount,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: CLASS_INCREMENT }),
  decrement: () => dispatch({ type: CLASS_DECREMENT }),
});

const ClassComponentCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassComponent);

function FunctionalComponent() {
  const count = useSelector(state => state.functionCount);
  const dispatch = useDispatch();

  return (
    <div>
      🍋 <span>{count}</span>
      <button onClick={() => dispatch({ type: FUNCTION_INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: FUNCTION_DECREMENT })}>-</button>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ClassComponentCounter />
    <FunctionalComponent />
  </Provider>,
  document.getElementById('react-redux')
);
