import './style/main.css';
import React from 'react';
import ReactDOM from 'react-dom';

function component() {
  const element = document.createElement('div');

  element.classList.add('smile_ico');

  return element;
}

document.body.appendChild(component());

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name='React' />, document.getElementById('root'));
