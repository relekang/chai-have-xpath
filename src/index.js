/* eslint-env browser */
import {findSingleNode} from "./helpers";

let findDOMNode = findDOMNode || (global && global.findDOMNode) || require('react-dom').findDOMNode;

function haveComponentWithXpath(component, expression) {
  const domNode = findDOMNode(component);

  document.body.appendChild(domNode);
  const xpathNode = findSingleNode(expression, domNode.parentNode)
  document.body.removeChild(domNode);

  return xpathNode !== null;
}

export default function haveXpath(Chai) {
  Chai.Assertion.addMethod('xpath', function evaluateXpath(xpath) {
    const dom = findDOMNode(this._obj).outerHTML;
    this.assert(
      haveComponentWithXpath(this._obj, xpath),
      'Expected "' + dom + '" to have xpath \'' + xpath + '\'',
      'Expected "' + dom + '" to not have xpath \'' + xpath + '\''
    );
  });
}
