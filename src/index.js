import './style/main.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.classList.add('smile_ico');

  const sum = (a, b) => a + b;
  console.log(sum(1, 2));

  return element;
}

document.body.appendChild(component());
