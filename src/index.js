import _ from 'lodash';
import './style/main.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.classList.add('smile_ico');

  return element;
}

document.body.appendChild(component());
