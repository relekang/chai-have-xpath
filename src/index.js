/* eslint-env browser */
import {findSingleNode, getFindDOMNode} from './helpers';

let findDOMNode = findDOMNode || (global && global.findDOMNode);

function haveDomNodeWithXpath(domNode, expression) {
  document.body.appendChild(domNode);
  const xpathNode = findSingleNode(expression, domNode.parentNode);
  document.body.removeChild(domNode);

  return xpathNode !== null;
}

export default function haveXpath(Chai) {
  Chai.Assertion.addMethod('xpath', function evaluateXpath(xpath) {
    findDOMNode = findDOMNode || getFindDOMNode();

    const domNode = findDOMNode(this._obj);

    this.assert(
      haveDomNodeWithXpath(domNode, xpath),
      'Expected "' + domNode.outerHTML + '" to have xpath \'' + xpath + '\'',
      'Expected "' + domNode.outerHTML + '" to not have xpath \'' + xpath + '\''
    );
  });
}
