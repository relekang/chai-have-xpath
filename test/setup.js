/* eslint-env node, browser */
/* eslint-disable no-console */
import jsdom from 'jsdom';
import chai from 'chai';

import chaiHaveXpath from '../src/index';

chai.use(chaiHaveXpath);

if (typeof global.document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = global.document.defaultView;
}

global.chai = chai;
global.navigator = window.navigator;

console.log(`Running tests with React ${require('react').version}`);
