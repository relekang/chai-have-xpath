/* eslint-env browser */
let findDOMNode;

function getFirstOrderedNodeType() {
  if (global && global.XPathResult) {
    return XPathResult.FIRST_ORDERED_NODE_TYPE;
  }
  if (window && window.XPathResult) {
    return window.XPathResult.FIRST_ORDERED_NODE_TYPE;
  }
  throw new Error('XPathResult is not available');
}

function haveComponentWithXpath(component, expression) {
  let domNode;

  domNode = findDOMNode(component);

  document.body.appendChild(domNode.parentNode);
  const xpathNode = document.evaluate(
    expression,
    domNode.parentNode,
    null,
    getFirstOrderedNodeType(),
    null
  ).singleNodeValue;
  document.body.removeChild(domNode.parentNode);
  return xpathNode !== null;
}

export default function haveXpath(Chai) {
  Chai.Assertion.addMethod('xpath', function evaluateXpath(xpath) {
    if (typeof findDOMNode === 'undefined') {
      findDOMNode = require('react-dom').findDOMNode;
    }

    const dom = findDOMNode(this._obj).outerHTML;

    this.assert(
      haveComponentWithXpath(this._obj, xpath),
      'Expected "' + dom + '" to have xpath \'' + xpath + '\'',
      'Expected "' + dom + '" to not have xpath \'' + xpath + '\''
    );
  });
}
