/* eslint-env node, browser */
import _ from 'lodash';
import jsdom from 'jsdom';
import chai from 'chai';

import chaiHaveXpath from '../src/index';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

chai.use(chaiHaveXpath);

global.document = doc;
global.window = win;
global.chai = chai;

_.forOwn(win, (value, key) => {
  if (!window.hasOwnProperty(key)) {
    return;
  }

  if (key in global) {
    return;
  }

  global[key] = value;
});
