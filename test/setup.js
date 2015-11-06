/* eslint-env node, browser */
import _ from 'lodash';
import jsdom from 'jsdom';
import chai from 'chai';

import chaiHaveXpath from '../src/index';

chai.use(chaiHaveXpath);

if (typeof global.document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = global.document.defaultView;
}

global.chai = chai;

_.forOwn(global.window, (value, key) => {
  if (!window.hasOwnProperty(key)) {
    return;
  }

  if (key in global) {
    return;
  }

  global[key] = value;
});
