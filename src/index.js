import './style/main.css';
import './sample/react.js';
import './sample/redux.js';
import './sample/react-redux.js';
import _ from 'lodash';
import * as S from 'fxjs/Strict';
import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency';
import moment from 'moment';
import moment_timezone from 'moment-timezone';
import ip from 'ip';
import * as ip_utils from 'ip-utils';
import * as dummy from './dummy';
import * as util from './util';
import * as playground from './playground';

function component() {
  const element = document.createElement('div');

  element.classList.add('smile_ico');

  return element;
}

const smile = component();
document.body.appendChild(smile);

Object.assign(window, dummy, util, playground, { _, S, L, C, moment, moment_timezone, ip, ip_utils });


if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept();
  module.hot.dispose(function () {
    document.body.removeChild(smile);
  });
}
